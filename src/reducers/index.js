import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import common from '../redux/CommonReducer'
import about from '../features/About/AboutReducer';
import protfolio from '../features/Protfolio/ProtfolioReducer'


const rootReducer = (history) => combineReducers({
  router: connectRouter(history),
  common,
  about,
  protfolio,
});

export default rootReducer;
