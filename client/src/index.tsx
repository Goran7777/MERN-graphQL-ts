import React, { useState } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { Layout } from 'antd';
import Listings from './components/Listings';
import Home from './components/Home';
import Host from './components/Host';
import Listing from './components/Listing';
import NotFound from './components/NotFound';
import User from './components/User';
import LogIn from './components/LogIn';
import { Viewer } from './lib/types';
import './styles/index.scss';

const client = new ApolloClient({
  uri: '/api',
});

const initialViewer: Viewer = {
  id: null,
  token: null,
  avatar: null,
  hasWallet: null,
  didRequest: false,
};

const App = () => {
  const [viewer, setViewer] = useState<Viewer>(initialViewer);
  console.log(viewer);
  return (
    <Router>
      <Layout id="app">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/host" component={Host} />
          <Route exact path="/listing/:id" component={Listing} />
          <Route exact path="/listings/:location?" component={Listings} />
          <Route
            exact
            path="/login"
            render={(props) => <LogIn {...props} setViewer={setViewer} />}
          />
          <Route exact path="/user/:id" component={User} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </Router>
  );
};

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,

  document.getElementById('root')
);
