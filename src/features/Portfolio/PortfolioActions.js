import Resource from '../../apis/resource';

export const actionTypes = {
  HOME___TEST_ACTION: 'HOME___TEST_ACTION',
};

export function testAction(data) {
  console.log('ACTION -----', data)
  return (dispatch) => {
    return Resource.HomeResource.testApi(data)
      .then((response) => {
        const { test } = response.data;
        console.log('ACtion response', response);
        dispatch({
          type: actionTypes.HOME___TEST_ACTION,
          test
        });
      })
      .catch((error) => console.log(error));
  };
}