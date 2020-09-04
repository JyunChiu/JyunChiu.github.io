export const actionTypes = {
  COMMON___SWITCH_THEME_COLOR: 'COMMON___SWITCH_THEME_COLOR',
};


export function switchThemeColor(e) {
  const val = e.target.checked
  return {
    type: actionTypes.COMMON___SWITCH_THEME_COLOR,
    val
  };
}

