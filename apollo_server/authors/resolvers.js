// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const authorResolvers = {
  Query: {
    getAuthors: () => [],
  },
};

module.exports = {
  authorResolvers,
};
