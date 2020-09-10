import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import * as ProtfolioActions from './ProtfolioActions';
import { COLORS, RWD_SIZE } from '../../styles/_variables';
import Cover from './components/Cover';
import { PROJECTS_INFO } from './ProtfolioConsts';


const Div = styled.div`
  background: ${props => props.isDark ? '#2f2f2f' : '#FFFFFF'};
  color: ${props => props.isDark ? COLORS.WHITE : COLORS.BLACK};
  /* min-height: 100vh; */
  padding: 5rem 8% 6rem;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  .projects{
    width: 45%
  }

  @media ${RWD_SIZE.M} {
    .projects{
      width: 50%
    }
  }

  @media ${RWD_SIZE.S} {
    flex-flow: column nowrap;
    justify-content: unset;
    align-items: center;
    padding: 3rem 5%;
    .projects{
      width: 100%
    }
  }
`


const Protfolio = (props) => {

  const { test, testAction, isDark } = props;
  function handleClick() {
    testAction(4);
  }

  return (
    <Div isDark={isDark} >
      {PROJECTS_INFO.map((item, index) => (
        <div className="projects">
          <Cover
            isDark={isDark}
            item={item}
            num={index + 1}
          />
        </div>
      ))}
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
