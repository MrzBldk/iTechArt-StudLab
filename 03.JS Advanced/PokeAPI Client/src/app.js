import { pagination } from 'paginationjs' // eslint-disable-line no-unused-vars
import { paginationStyle } from '../node_modules/paginationjs/dist/pagination.css' // eslint-disable-line no-unused-vars
import { fetchPokemonCount, fetchPokemonList, fetchPokemon } from './utils/fetches'

function pokemonTemplating(data) {
  var html = $();
  $.each(data, function (index, item) {
    html = html.add(`<article><img width="96px" src="${item.image}"><h2>${item.name}</h2></article>`);
    html.last().attr('onclick', `openPokemonInfoModal("${item.name}")`)
  })
  html.addClass('m-3')
  html.children("h2").addClass('has-text-centered is-capitalized')
  return html;
}

$(async function () {

  const count = await fetchPokemonCount()

  const pokemonsData = await fetchPokemonList(count)

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

async function openPokemonInfoModal(name) {
  const pokemon = await fetchPokemon(name)

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
  $.each(pokemon.stats, function (index, val) {
    modalBody.children('ul').append(`<li>${val.stat.name}: <span class="tag is-info">${val.base_stat}</span></li>`)
  })

  modalBody.append('<p><b>Abilities:</b></p>').append('<ul class="ml-4">')
  $.each(pokemon.abilities, function (index, val) {
    modalBody.children('ul:last-child').append(`<li>${val.ability.name}`)
  })

  $('.modal').addClass('is-active')
}

function closeModal() {
  $('.modal').removeClass('is-active')
}

window.openPokemonInfoModal = openPokemonInfoModal

window.closeModal = closeModal