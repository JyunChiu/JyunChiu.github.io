import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import common from '../redux/CommonReducer'
import portfolio from '../features/Portfolio/PortfolioReducer'


const rootReducer = (history) => combineReducers({
  router: connectRouter(history),
  common,
  portfolio,
});

export default rootReducer;
