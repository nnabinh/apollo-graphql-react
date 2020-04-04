const { merge } = require('lodash');
const { ApolloServer, gql } = require('apollo-server');

const { bookTypeDefs } = require('./books/typeDefs');
const { authorTypeDefs } = require('./authors/typeDefs');

const { bookResolvers } = require('./books/resolvers');
const { authorResolvers } = require('./authors/resolvers');

// If you had Query fields not associated with a
// specific type you could put them here
const queryRootTypeDefs = gql`
  type Query {
    _empty: String
  }
`;

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs: [queryRootTypeDefs, bookTypeDefs, authorTypeDefs],
  resolvers: merge({}, bookResolvers, authorResolvers),
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
