import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import common from '../redux/CommonReducer'
import about from '../features/About/AboutReducer';
import portfolio from '../features/Portfolio/PortfolioReducer'


const rootReducer = (history) => combineReducers({
  router: connectRouter(history),
  common,
  about,
  portfolio,
});

export default rootReducer;
