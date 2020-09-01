
import { createHashHistory as createHistory } from 'history';
import configureStore from './configureStore';

export const history = createHistory();
export const store = configureStore(history, {});
