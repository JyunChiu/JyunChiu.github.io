import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { COLORS, FONT_FAMILY, RWD_SIZE } from '../../../styles/_variables'

const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: flex-start;
  text-decoration: none;
  color: ${props => props.isDark ? COLORS.WHITE : COLORS.BLACK};
  background: ${props => props.isDark ? COLORS.BLACK : COLORS.WHITE};
  margin: 1rem;
  padding: 1rem 2rem;
  height: 12rem;
  box-shadow: 0px 5px 16px -1px ${props => props.isDark ? props.bc : '#c7c7c7'};
  border-radius: 5px;
  letter-spacing: 2px;
  position: relative;
  transition: .5s ease all;

  &.disabled{
    box-shadow: 0px 4px 6px -1px ${props => props.isDark ? props.bc : '#c7c7c7'};
    opacity: 0.4;
    cursor: not-allowed;
    pointer-events: none;
  }

  &:hover{
    opacity: 0.8;
    transform: translateY(5px);
    box-shadow: 0px 4px 6px -1px ${props => props.isDark ? props.bc : '#c7c7c7'};
  }

  .number{
    font-family: ${FONT_FAMILY.PROJECT_NO};
    font-size: 3.5rem;
    width: 15%;

  }

  .wrapper{
    display: flex;
    height: 100%;
    width: 85%;
  }

  .title{
    font-family: ${FONT_FAMILY.PROJECT_NO};
    font-size: ${props => props.titleSize || '1.8rem'};
    background: ${props => props.bc};
    margin: 0.6rem 1.8rem 0 0rem;
    padding: 2.8rem 1rem 0.8rem 2rem;
    text-align: end;
    width: 45%;
    height: 60%;
    word-break: break-word;
    line-height:${props => props.titleLineHeight};
    white-space: pre-line;
  }

  .info{
    display: flex;
    flex-direction: column;
    margin: 1.2rem 0rem;
    width: 55%;
    &--year{
      margin: 0 0 0.5rem;
      font-size: 0.8rem;
      opacity: 0.4;
    }
    &--desc{
      opacity: 0.75;
      font-size: 0.8rem;
      letter-spacing: 1px;
      line-height: 24px;
      word-break: break-word;
      white-space: pre-line;
    }
  }

  @media ${RWD_SIZE.M} {
    .title{
      font-size: 1.6rem;
    }
  }

  @media ${RWD_SIZE.S} {
    .number{
      width: 12%;
    }
    .wrapper{
      width: 88%;
    }
    .title{
      margin: 0.6rem 3rem 0 0rem;
      width: 30%;
      padding: 2.8rem 1.5rem 1rem 2rem;
    }
    .info{
      margin: 1.2rem 0rem;
      width: 70%;
      &--desc{
        line-height: 26px;
      }
    }
  }

  @media ${RWD_SIZE.XS} {
    height: 15rem;
    padding: 2rem;
    align-items:space-around;
    &.baseballTraining{
      .title{
        font-size: 5vw;
        line-height: 8vw;
      }
    }
    .number{
      font-size: 2.8rem;
      width: 15%;
    }
    .wrapper{
      flex-direction: column;
      width: 85%;
    }
    .title{
      text-align: initial;
      margin: 0rem 0rem 1rem;
      width: auto;
      height: 30%;
      font-size: 1.5rem;
      padding: 1.5rem 1rem 1rem;
      line-height: 2.5rem;
    }
    .info{
      width: auto;
      margin: 0rem 0.6rem;
      &--year{
        margin: 0.2rem 0;
      }
    }
  }
`


const Cover = (props) => {

  const {
    isDark,
    num,
    item: { title, desc, path, year, bc, titleSize, disabled, titleLineHeight = '3rem', className = '' }
  } = props;


  return (
    <StyledNavLink
      to={path}
      bc={bc}
      isDark={isDark}
      titleSize={titleSize}
      titleLineHeight={titleLineHeight}
      className={disabled ? `disabled ${className}` : className}
    >
      <div className='number'>{num}</div>
      <div className='wrapper'>
        <div className='title'>{title}</div>
        <div className='info'>
          <div className='info--year'>{year}</div>
          <div className='info--desc'>{desc}</div>
        </div>
      </div>
    </StyledNavLink >
  );
};

export default Cover;
