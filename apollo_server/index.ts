import express from 'express';
import { merge } from 'lodash';
import { ApolloServer, gql } from 'apollo-server';

import { bookTypeDefs } from './books/typeDefs';
import { authorTypeDefs } from './authors/typeDefs';

import { bookResolvers } from './books/resolvers';
import { authorResolvers } from './authors/resolvers';

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

// Create a new express application instance
const app: express.Application = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3001, function () {
  console.log('Example app listening on port 3001!');
});
