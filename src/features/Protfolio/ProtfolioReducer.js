import { handleActions } from 'redux-actions';
import { actionTypes } from './ProtfolioActions';
const initialState = {
  test: 123,
};

export default handleActions(
  {
    [actionTypes.HOME___TEST_ACTION]: (state, payload) => {
      console.log('REDUCER -----', payload);
      const { test } = payload
      return {
        ...state,
        test
      };
    },
  },
  initialState,
);
