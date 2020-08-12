import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';

import {
  HashRouter as Router,
  // BrowserRouter as Router
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

import { hot } from 'react-hot-loader';


import { store, history } from '~~store';


// import '../assets/style/style.css';
import Routes from './routes';


// hot-reload issue router 不能重新被產生 https://github.com/reactjs/react-router-redux/issues/364
const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Router>
        <Routes />
      </Router>
    </ConnectedRouter>
  </Provider>
);

hot(module)(App);

ReactDOM.render(<App />, document.querySelector('#app'));
