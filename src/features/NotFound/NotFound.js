import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import * as Mixins from '../../styles/_mixins';
import { COLORS, FONT_FAMILY, FONT_SIZE, RWD_SIZE } from '../../styles/_variables';
import { TEXT } from './Consts';

const Div = styled.div`
  ${props => Mixins.bgBase(props.isDark)};
  padding: 2rem 8% 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: 2px;
  .wrapper{
    padding: 2% 10% 4%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid;
    border-color: ${props => props.isDark ? COLORS.WHITE : COLORS.BLACK};
    width: 50%;
    height: 60vh;
    border-radius: 1rem;
    box-shadow: 0px 80px 25px -60px ${props => props.isDark ? '#000000ad' : '#c7c7c7'};
    justify-content: space-between;
  }

  .box{
    display: flex;
    align-items: center;
    margin: 6rem 0 0;
  }

  .num{
    font-size: 6rem;
    font-family: ${FONT_FAMILY.ERROR_PAGE_NUM};
    font-weight: 600;
    letter-spacing: 5px;
  }

  .line{
    width: 1px;
    height: 4.5rem;
    margin: 1rem 1.5rem 0;
    background: ${props => props.isDark ? COLORS.WHITE : COLORS.BLACK};
  }

  .text{
    font-family: ${FONT_FAMILY.PROJECT_NAME};
    line-height: 1.5rem;
    font-size: ${FONT_SIZE.WEB.BASE};
    white-space: pre-line;
    margin: 2.5rem 0 0 ;
  }

  .go-back{
    background: ${props => props.isDark ? COLORS.WHITE : COLORS.BLACK};
    font-family: ${FONT_FAMILY.ERROR_PAGE_BTN};
    color: ${props => props.isDark ? COLORS.BLACK : COLORS.WHITE};
    padding: 0.6rem 1.5rem;
    border-radius: 3rem;
    border: 1px solid;
    border-color: ${props => props.isDark ? COLORS.WHITE : COLORS.BLACK};
    cursor: pointer;
    width: 8rem;
    font-size: 0.8rem;
    text-align: center;
    &:hover{
      background: ${props => props.isDark ? COLORS.BLACK : COLORS.WHITE};
      border-color: ${props => props.isDark ? COLORS.WHITE : COLORS.BLACK};
      color: ${props => props.isDark ? COLORS.WHITE : COLORS.BLACK};
      transition: .4s ease all;
    }
  }

  @media ${RWD_SIZE.S} {
    padding: 5rem 8% 0rem;
    align-items: unset;
    .wrapper{
      width: 60%;
      height: 50vh;
      padding: 5% 10% 8%;
    }
  }

  @media ${RWD_SIZE.XS} {
    padding: 5rem 8% 0rem;
    .wrapper{
      width: 80%;
      height: 60vh;
      padding: 5% 10% 20%;
    }
    .box{
      flex-direction: column;
      align-items: center;
      margin: 4rem 0 0;
    }

    .line{
      width: 30%;
      height: 4px;
      margin: 2rem 0 1.2rem;
    }

    .text{
      text-align: center;
      margin: 0;
    }
  }
`;

const NotFound = (props) => {
  const { isDark } = props;

  function handleBack() {
    props.history.goBack()
  }

  return (
    <Div isDark={isDark}>
      <div className='wrapper'>
        <div className='box'>
          <div className='num'>
            404
        </div>
          <div className='line' />
          <div className='text'>
            {TEXT.CONTENT}
          </div>
        </div>
        <div className='go-back' onClick={handleBack}>
          Go Back &nbsp;⇀
        </div>
      </div>
    </Div >
  );
};

const mapStateToProps = (state) => ({
  isDark: state.common.isDark,
});

const mapDispatchToProps = {
};

export default compose(connect(mapStateToProps, mapDispatchToProps))(NotFound);
