const { ApolloServer } = require('apollo-server');
const { typeDefs, resolvers } = require('./types');
// const dataSources = require('./datasources');
const server = new ApolloServer({ resolvers, typeDefs });

server
	.listen()
	.then(({ url }) => console.log(`🚀  Server listening at ${url}`));
