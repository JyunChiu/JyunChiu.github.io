import { handleActions } from 'redux-actions';
import { actionTypes } from './CommonActions';

const initialState = {
  isDark: true,
  isHamMenuOpen: false,
};

export default handleActions({
  [actionTypes.COMMON___SWITCH_THEME_COLOR]: (state, payload) => {
    const { val } = payload;
    return {
      ...state,
      isDark: val,
    };
  },

  [actionTypes.COMMON___SET_HAM_MENU_STATUS]: (state, payload) => {
    const { status } = payload;
    return {
      ...state,
      isHamMenuOpen: status,
    };
  },
}, initialState);
