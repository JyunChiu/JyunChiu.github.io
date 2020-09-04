import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import * as AboutActions from './AboutActions';
import StyledWrapper from '../../components/StyledWrapper';
import { COLORS } from '../../styles/_variables';


const Div = styled.div`
  background: ${props => props.isDark ? '#2f2f2f' : '#FFFFFF'};
  letter-spacing: 2px;
  background: ${props => props.isDark ? COLORS.BLACK : COLORS.WHITE};
  color: ${props => props.isDark ? COLORS.WHITE : COLORS.BLACK};
  height: 100vh;
`;


const About = (props) => {

  const { test, testAction, isDark } = props;
  function handleClick() {
    testAction(4);
  }

  // console.log('HOME props', props);
  return (
    <Div isDark={isDark}>
      About
      <StyledWrapper>
        {/* <div>
          ddd
        </div> */}
      </StyledWrapper>
    </Div>
  );
};

const mapStateToProps = (state) => ({
  isDark: state.common.isDark,
  test: state.about.test,
});

const mapDispatchToProps = {
  testAction: AboutActions.testAction,
};

export default compose(connect(mapStateToProps, mapDispatchToProps))(About);
