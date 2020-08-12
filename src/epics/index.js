import { combineEpics } from 'redux-observable';
import TestImgAndCssEpics from '~~features/TestImgAndCss/TestImgAndCssEpics';


const rootEpic = combineEpics(
  ...TestImgAndCssEpics
);

export default rootEpic;
