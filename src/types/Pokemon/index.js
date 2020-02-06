const bulbasaur = require('./bulbasaur');
const charmander = require('./charmander');
const squirtle = require('./squirtle');
const Pokemon = `
  type Pokemon {
    abilities: [Ability]
    base_experience: Int
    forms: [AdditionalResource]
    game_indices: [GameIndex]
    height: Int
    held_items: [HeldItem]
    id: Int
    is_default: Boolean
    location_area_encounters: String
    moves: [Move]
    name: String
    order: Int
    species: AdditionalResource
    sprites: Sprite
    stats: [PokeStat]
    types: [PokeType]
    weight: Int
  }
`;

module.exports = { bulbasaur, charmander, squirtle };
