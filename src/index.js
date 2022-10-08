import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.scss';
import './assets/fonts/AvenirLTStd-Book.otf';
import { BrowserRouter as Router } from 'react-router-dom';

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  // uri: 'https://api-eu-central-1.graphcms.com/v2/cl3ghy6ju5cp201zdexjac6b7/master',
  uri: 'https://api-eu-west-2.hygraph.com/v2/cl6gzwnyr3ypg01tae59j6ce8/master',

  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Router>
        <App />
      </Router>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
