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
        path="/"
        component={loadable(() => import(/* webpackChunkName: "About" */ '../features/Portfolio'))}
      />
      <Route
        exact
        path="/about"
        component={loadable(() => import(/* webpackChunkName: "About" */ '../features/About'))}
      />
      <Route
        exact
        path="/portfolio"
        component={loadable(() => import(/* webpackChunkName: "About" */ '../features/Portfolio'))}
      />
      <Route
        exact
        path="/portfolio/rebas"
        component={loadable(() => import(/* webpackChunkName: "About" */ '../features/Projects/Rebas'))}
      />
      <Route
        exact
        path="/portfolio/myWeb"
        component={loadable(() => import(/* webpackChunkName: "About" */ '../features/Projects/MyWeb'))}
      />
      <Route
        exact
        path="/portfolio/others"
      // component={loadable(() => import(/* webpackChunkName: "About" */ '../features/Projects/Others'))}
      />
      <Route
        exact
        path="/portfolio/dailyPractice"
        component={loadable(() => import(/* webpackChunkName: "About" */ '../features/Projects/DailyPractice'))}
      />
      <Route
        component={loadable(() => import(/* webpackChunkName: "NotFound" */ '../features/NotFound'))}
      />
    </Switch>
  </App>
);

export default Routes;
