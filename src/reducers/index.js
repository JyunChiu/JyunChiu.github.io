import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

// import simple from '../features/TestImgAndCss/TestImgAndCssReducer';
// import simple from '~~features/TestImgAndCss/TestImgAndCssReducer';
// import auth from '~~features/Auth/AuthReducer';
// import intl from '~~features/intlUniversal/intlUniversalReducer';

import movie from '~~features/Movies/MovieReducer';


const rootReducer = combineReducers({
  // state: (state = {}) => state,
  // simple,
  // auth,
  // intl,
  // form: formReducer
  movie,
});

export default rootReducer;
