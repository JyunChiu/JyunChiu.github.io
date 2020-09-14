import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import * as ProtfolioActions from './ProtfolioActions';
import * as Mixins from '../../styles/_mixins';
import { RWD_SIZE } from '../../styles/_variables';
import Cover from './components/Cover';
import { PROJECTS_INFO } from './ProtfolioConsts';


const Div = styled.div`
  ${props => Mixins.bgBase(props.isDark)};
  display: flex;
  justify-content: center;
  align-items: flex-start;

  .project-box{
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    padding: 2rem 0rem;
    width: 100%;
  }
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
      <div className='project-box'>
        {PROJECTS_INFO.map((item, index) => (
          <div className="projects">
            <Cover
              isDark={isDark}
              item={item}
              num={index + 1}
            />
          </div>
        ))}
      </div>
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
