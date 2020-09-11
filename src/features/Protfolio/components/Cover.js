import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { COLORS, FONT_SIZE, FONT_FAMILY, RWD_SIZE } from '../../../styles/_variables'


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

  &:hover{
    opacity: 0.8;
    transform: translateY(5px);
    box-shadow: 0px 4px 6px -1px ${props => props.isDark ? props.bc : '#c7c7c7'};
    transition: .5s ease all;
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
    font-size: ${FONT_SIZE.WEB.TITLE};
    background: ${props => props.bc};
    margin: 0.6rem 2rem 0 0rem;
    padding: 2.8rem 1rem 1rem 2rem;
    text-align: end;
    width: 45%;
    height: 60%;
    word-break: break-word;
    line-height: 3rem;
  }

  .info{
    display: flex;
    flex-direction: column;
    margin: 1.2rem 0rem;
    width: 55%;
    &--year{
      margin: 0 0 0.5rem;
      font-size: ${FONT_SIZE.WEB.SMALL};
      opacity: 0.4;
    }
    &--desc{
      opacity: 0.75;
      font-size: ${FONT_SIZE.WEB.BASE};
      letter-spacing: 1px;
      line-height: 24px;
      word-break: break-word;
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
      font-size: ${FONT_SIZE.MOB.TITLE};
      padding: 1.5rem 1rem 1rem;
      line-height: 2.5rem;
    }
    .info{
      width: auto;
      margin: 0rem 0.6rem;
      &--year{
        margin: 0.2rem 0;
        font-size: ${FONT_SIZE.MOB.BASE};
      }
      &--desc{
        font-size: ${FONT_SIZE.MOB.BASE};
      }
    }
  }
`


const Cover = (props) => {

  const {
    isDark,
    num,
    item: { title, desc, path, year, bc }
  } = props;


  return (
    <StyledNavLink to={path} bc={bc} isDark={isDark}>
      <div className='number'>{num}</div>
      <div className='wrapper'>
        <div className='title'>{title}</div>
        <div className='info'>
          <div className='info--year'>{year}</div>
          <div className='info--desc'>{desc}</div>
        </div>
      </div>
    </StyledNavLink>
  );
};

export default Cover;
