const pagination = require('paginationjs') // eslint-disable-line no-unused-vars
const paginationStyle = require('../node_modules/paginationjs/dist/pagination.css') // eslint-disable-line no-unused-vars

const countQuery = `query pokemons {
    pokemons {
      count
    }
  }`

const getPokemonListQuery = `query getPokemonList($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      results {
        name
        image
      }
    }
  }`

const getPokemonListQueryVariables = {
  limit: 0,
  offset: 0
}

const getPokemonInfoQuery = `query getPokemonInfo($name: String!) {
    pokemon(name: $name) {
      name
      weight
      height
      types {
        type {
          name
        }
      }
      stats {
        stat {
          name
        }
        base_stat
      }
      abilities {
        ability {
          name
        }
      }
    }
  }`

function pokemonTemplating(data) {
  var html = $();
  $.each(data, function (index, item) {
    html = html.add(`<article><img width="96px" src="${item.image}"><h2>${item.name}</h2></article>`);
    html.last().attr('onclick', `getPokemonInfo("${item.name}")`)
  })
  html.addClass('m-3')
  html.children("h2").addClass('has-text-centered is-capitalized')
  return html;
}

$(async function () {
  const countResponce = await fetch('https://graphql-pokeapi.graphcdn.app/', {
    credentials: 'omit',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: countQuery
    }),
    method: 'POST',
  })
  const countData = await countResponce.json();
  getPokemonListQueryVariables.limit = countData.data.pokemons.count

  const pokemonsResponce = await fetch('https://graphql-pokeapi.graphcdn.app/', {
    credentials: 'omit',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: getPokemonListQuery,
      variables: getPokemonListQueryVariables
    }),
    method: 'POST',
  })
  const pokemonsData = await pokemonsResponce.json()

  $('#pagination-container').pagination({
    dataSource: pokemonsData.data.pokemons.results,
    pageSize: 44,
    showGoInput: true,
    showGoButton: true,
    callback: function (data) {
      var html = pokemonTemplating(data);
      $('#pokemons-container').html(html);
    }
  })
})

async function getPokemonInfo(name) {
  const infoResponce = await fetch('https://graphql-pokeapi.graphcdn.app/', {
    credentials: 'omit',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: getPokemonInfoQuery,
      variables: { name }
    }),
    method: 'POST',
  })
  const pokemonInfo = await infoResponce.json()
  const pokemon = pokemonInfo.data.pokemon

  $('.modal-card-title').html(pokemon.name)
  let modalBody = $('.modal-card-body').html(
    `<p><b>Height:</b> ${pokemon.height}</p>
    <p><b>Weight:</b> ${pokemon.weight}</p>
    <p><b>Types:</b> </p>`
  )
  $.each(pokemon.types, function (index, val) {
    modalBody.children('p:last-child').append(`<span class="tag is-primary">${val.type.name}</span> `)
  })

  modalBody.append('<p><b>Stats:</b></p>').append('<ul class="ml-4">')
  $.each(pokemon.stats, function(index, val) {
    modalBody.children('ul').append(`<li>${val.stat.name}: <span class="tag is-info">${val.base_stat}</span></li>`)
  })

  modalBody.append('<p><b>Abilities:</b></p>').append('<ul class="ml-4">')
  $.each(pokemon.abilities, function(index, val) {
    modalBody.children('ul:last-child').append(`<li>${val.ability.name}`)
  })
  
  $('.modal').addClass('is-active')
}

function closeModal() {
  $('.modal').removeClass('is-active')
}

window.getPokemonInfo = getPokemonInfo

window.closeModal = closeModal