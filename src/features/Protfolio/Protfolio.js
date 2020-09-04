import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import * as ProtfolioActions from './ProtfolioActions';
import StyledWrapper from '../../components/StyledWrapper';


const Div = styled.div`
`;


const Protfolio = (props) => {

  const { test, testAction } = props;
  function handleClick() {
    testAction(4);
  }

  console.log('HOME props', props);
  return (
    <Div>
      Protfolio
    </Div>
  );
};

const mapStateToProps = (state) => ({
  test: state.protfolio.test,
});

const mapDispatchToProps = {
  testAction: ProtfolioActions.testAction,
};

export default compose(connect(mapStateToProps, mapDispatchToProps))(Protfolio);
