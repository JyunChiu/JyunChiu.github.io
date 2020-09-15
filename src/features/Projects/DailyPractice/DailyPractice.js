import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import * as Mixins from '../../../styles/_mixins';
import { COLORS, FONT_SIZE, RWD_SIZE } from '../../../styles/_variables';
import { MENU } from './Consts';
import TagSection from '../../../components/TagSection';

const Div = styled.div`
  ${props => Mixins.bgBase(props.isDark)};
  display: flex;
  flex-direction: column;
  letter-spacing: 1.5px;
  font-size: ${FONT_SIZE.WEB.BASE};
  position: relative;
  
  .menu{
    color: ${props => props.isDark ? COLORS.WHITE : COLORS.BLACK};
    background: ${props => props.isDark ? COLORS.BLACK : COLORS.WHITE};
    box-shadow: 0px 5px 10px 0px ${props => props.isDark ? '#4ea59f5c' : '#c7c7c796'};
    width: 15rem;
    padding: 1rem 0;
    position: fixed;
    top: 20%;
    &--item{
      opacity: 0.5;
      line-height: 1.5rem;
      padding: 0.4rem 1rem 0.4rem 2rem;
      cursor: pointer;
      margin: 1rem 0;
      margin-left: -2px;
      cursor: pointer;
      &.current{
        opacity: 1;
        border-left: 6px solid ${COLORS.GRAY};
        transition: .4s ease all;
      }
      &:hover{
        opacity: 0.8;
        transition: .4s ease all;
      }
    }
  }

  @media ${RWD_SIZE.XS} {
  }
`;

const DailyPractice = (props) => {
  const { isDark } = props;
  const [currentTab, setCurrentTab] = useState('calculator');

  function handleClickTab(tabId) {
    setCurrentTab(tabId)
  }

  return (
    <Div isDark={isDark}>
      <div className='menu'>
        {MENU.map(item => (
          <div
            className={currentTab === item.id ? 'menu--item current' : 'menu--item'}
            id={`anchor--${item.id}`}
            onClick={() => handleClickTab(item.id)}
          >
            {item.label}
          </div>
        ))}
      </div>
    </Div>
  );
};

const mapStateToProps = (state) => ({
  isDark: state.common.isDark,
});

const mapDispatchToProps = {
};

export default compose(connect(mapStateToProps, mapDispatchToProps))(DailyPractice);
