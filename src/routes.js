import React from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';
import Loadable from '@loadable/component';
import { PrivateRoute } from '~~components/Route';
import App from '~~features/App';

// 代替indexRoute的方式 http://stackoverflow.com/questions/42254929/how-to-nest-routes-in-react-router-v4
const Routes = () => (
  <App>
    <Switch>
      <Route
        exact
        path="/"
        component={Loadable(() => import(/* webpackChunkName: "Home" */ '~~features/Home'))}
      />
    </Switch>
  </App>
);

export default Routes;
