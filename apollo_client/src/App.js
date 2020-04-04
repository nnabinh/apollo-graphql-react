import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import BookList from './BookList';
import './App.css';

const client = new ApolloClient({
  uri: 'http://localhost:4000',
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="content">
        <div>
          <h2> My first Apollo app </h2>
        </div>
        <BookList />
      </div>
    </ApolloProvider>
  );
}

export default App;
