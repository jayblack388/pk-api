const PokemonAPI = require('./pokemon');
const dataSources = () => ({
	pokemonAPI: new PokemonAPI(),
});

module.exports = dataSources;
