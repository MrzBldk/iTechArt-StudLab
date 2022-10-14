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

export { countQuery, getPokemonListQuery, getPokemonInfoQuery }