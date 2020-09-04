import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import * as ProtfolioActions from './ProtfolioActions';
import StyledWrapper from '../../components/StyledWrapper';
import { COLORS } from '../../styles/_variables';


const Div = styled.div`
  background: ${props => props.isDark ? '#2f2f2f' : '#FFFFFF'};
  color: ${props => props.isDark ? COLORS.WHITE : COLORS.BLACK};
  height: 100vh;
`;


const Protfolio = (props) => {

  const { test, testAction, isDark } = props;
  function handleClick() {
    testAction(4);
  }

  console.log('HOME props', props);
  return (
    <Div isDark={isDark}>
      Protfolio
    </Div>
  );
};

const mapStateToProps = (state) => ({
  isDark: state.common.isDark,
  test: state.protfolio.test,
});

const mapDispatchToProps = {
  testAction: ProtfolioActions.testAction,
};

export default compose(connect(mapStateToProps, mapDispatchToProps))(Protfolio);
