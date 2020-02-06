const { gql } = require('apollo-server');
const typeDefs = gql`
	# enum GENERIC_ENUM {
	#   FIRST
	#   SECOND
	#   THIRD
	#   SEEMS_TO_BE_CAP_CASE
	# }
	# type GENERIC_TYPES {
	#   id: ID
	#   string: String
	#   integer: Int
	#   float: Float
	#   boolean: Boolean
	#   enum: GENERIC_ENUM
	# }
	type Query {
		allPokemon: [AdditionalResource]
		pokemon(id: String): AdditionalResource
	}
	type Pokemon {
		abilities: [Ability]
		base_experience: Int
		forms: [AdditionalResource]
		game_indices: [GameIndex]
		height: Int
		held_items: [HeldItem]
		id: Int!
		is_default: Boolean
		location_area_encounters: String
		moves: [Move]
		name: String!
		order: Int
		species: AdditionalResource
		sprites: Sprite
		stats: [PokeStat]
		types: [PokeType]
		weight: Int
	}
	type AdditionalResource {
		name: String
		url: String
	}
	type Ability {
		is_hidden: Boolean
		slot: Int
		ability: AdditionalResource
	}
	type GameIndex {
		game_index: Int
		version: AdditionalResource
	}
	type HeldItem {
		item: AdditionalResource
		version_details: [HeldItemVersionDetail]
	}
	type HeldItemVersionDetail {
		rarity: Int
		version: AdditionalResource
	}
	type Move {
		move: AdditionalResource
		version_group_details: [MoveVersionGroupDetails]
	}
	type MoveVersionGroupDetails {
		level_learned_at: Int
		version_group: AdditionalResource
		move_learn_method: AdditionalResource
	}
	type PokeStat {
		base_stat: Int
		effort: Int
		stat: AdditionalResource
	}
	type PokeType {
		slot: Int
		type: AdditionalResource
	}
	type Sprite {
		back_default: String
		back_female: String
		back_shiny: String
		back_shiny_female: String
		front_default: String
		front_female: String
		front_shiny: String
		front_shiny_female: String
	}
`;
const bulbasaur = {
	name: 'bulbasaur',
	url: 'https://pokeapi.co/api/v2/pokemon/1/',
};
const charmander = {
	name: 'charmander',
	url: 'https://pokeapi.co/api/v2/pokemon/4/',
};
const squirtle = {
	name: 'squirtle',
	url: 'https://pokeapi.co/api/v2/pokemon/7/',
};
const sample = [bulbasaur, charmander, squirtle];

const resolvers = {
	Query: {
		pokemon: (obj, { id }, context, info) => {
			const found = sample.find(thing => thing.name === id);
			return found;
		},
		allPokemon: () => {
			return sample;
		},
		// demoResolver: (obj, args, context, info) => {
		// 	return;
		// },
	},
};

module.exports = { typeDefs, resolvers };
