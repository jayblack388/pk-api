const { RESTDataSource } = require('apollo-datasource-rest');

class PokemonAPI extends RESTDataSource {
	constructor() {
		super();
		this.baseURL = 'https://pokeapi.co/api/v2/';
	}
	async getAllPokemon() {
		const response = await this.get('pokemon');
		return this.allPokemonReducer(response);
	}
	async getPokemon(id) {
		const response = await this.get(`pokemon/${id}`);
    return this.pokemonReducer(response);
	}
	allPokemonReducer(pokemon) {
		return pokemon;
	}
	pokemonReducer(pokemon) {
		return pokemon;
	}
}

module.exports = PokemonAPI;
