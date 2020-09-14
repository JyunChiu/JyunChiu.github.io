import React, { Fragment } from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';
import loadable from '@loadable/component';

import App from '../features/App';


// 代替indexRoute的方式 http://stackoverflow.com/questions/42254929/how-to-nest-routes-in-react-router-v4
const Routes = () => (
  <App>
    <Switch>
      <Route
        exact
        path="/about"
        component={loadable(() => import(/* webpackChunkName: "About" */ '../features/About'))}
      />
      <Route
        exact
        path="/protfolio"
        component={loadable(() => import(/* webpackChunkName: "About" */ '../features/Protfolio'))}
      />
      <Route
        exact
        path="/protfolio/rebase"
        component={loadable(() => import(/* webpackChunkName: "About" */ '../features/Projects/Rebas'))}
      />
    </Switch>
  </App>
);

export default Routes;
