const { mockBooks } = require('./mock');

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const bookResolvers = {
  Query: {
    getBooks: () => mockBooks,
  },
};

module.exports = {
  bookResolvers,
};
