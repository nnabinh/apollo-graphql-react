import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const EXCHANGE_RATES = gql`
  {
    books {
      title
      author {
        name
      }
    }

    authors {
      name
    }
  }
`;

export default function ExchangeRates() {
  const { loading, error, data } = useQuery(EXCHANGE_RATES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.books.map(({ title, author }) => (
    <div key={title}>
      <p>
        Book title: {title}
        <br />
        Author: {author.name}
      </p>
    </div>
  ));
}
