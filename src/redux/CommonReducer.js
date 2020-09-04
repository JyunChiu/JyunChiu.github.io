import { handleActions } from 'redux-actions';
import { actionTypes } from './CommonActions';

const initialState = {
  // isDark: true,
  isDark: false
};

export default handleActions({
  [actionTypes.COMMON___SWITCH_THEME_COLOR]: (state, payload) => {
    const { val } = payload;
    return {
      ...state,
      isDark: val,
    };
  },
}, initialState);
