import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import * as HomeActions from './HomeActions';


const Div = styled.div`
`;


const Home = (props) => {

  const { test, testAction } = props;
  function handleClick() {
    testAction(4);
  }

  console.log('HOME props', props);
  return (
    <Div>
      Home
      {test}
      <button
        onClick={handleClick}
      >button</button>
    </Div>
  );
};

const mapStateToProps = (state) => ({
  test: state.home.test,
});

const mapDispatchToProps = {
  testAction: HomeActions.testAction,
};

export default compose(connect(mapStateToProps, mapDispatchToProps))(Home);
