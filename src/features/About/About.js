import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import * as AboutActions from './AboutActions';
import StyledWrapper from '../../components/StyledWrapper';


const Div = styled.div`
`;


const About = (props) => {

  const { test, testAction } = props;
  function handleClick() {
    testAction(4);
  }

  // console.log('HOME props', props);
  return (
    <Div>
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
  test: state.about.test,
});

const mapDispatchToProps = {
  testAction: AboutActions.testAction,
};

export default compose(connect(mapStateToProps, mapDispatchToProps))(About);
