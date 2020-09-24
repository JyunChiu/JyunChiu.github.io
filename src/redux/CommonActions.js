export const actionTypes = {
  COMMON___SWITCH_THEME_COLOR: 'COMMON___SWITCH_THEME_COLOR',
  COMMON___SET_HAM_MENU_STATUS: 'COMMON___SET_HAM_MENU_STATUS',
};


export function switchThemeColor(e) {
  const val = e.target.checked
  return {
    type: actionTypes.COMMON___SWITCH_THEME_COLOR,
    val
  };
}

export function setHamMenuStatus(status) {
  return {
    type: actionTypes.COMMON___SET_HAM_MENU_STATUS,
    status
  };
}

