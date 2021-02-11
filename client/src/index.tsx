import * as React from 'react';
import { render } from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Listings from './components/Listings/Listings';
import 'normalize.css/normalize.css';
import './reset.scss';
import 'antd/dist/antd.css';

const client = new ApolloClient({
  uri: '/api',
});

render(
  <ApolloProvider client={client}>
    <Listings title="Tinyhouse listings" />,
  </ApolloProvider>,

  document.getElementById('root')
);
