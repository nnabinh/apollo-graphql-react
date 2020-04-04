import { mockBooks } from './mock';

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
export const bookResolvers = {
  Query: {
    books: () => mockBooks,
  },
};
