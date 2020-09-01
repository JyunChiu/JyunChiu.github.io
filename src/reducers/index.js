import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import home from '../features/Home/HomeReducer';


const rootReducer = (history) => combineReducers({
  router: connectRouter(history),
  home,
});

export default rootReducer;
