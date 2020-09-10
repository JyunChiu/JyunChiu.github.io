import React, { useState, useEffect, Fragment } from 'react';
import styled from 'styled-components';
import { COLORS, RWD_SIZE } from '../../styles/_variables';

const StyledBurger = styled.button`
  display: none;
  @media ${RWD_SIZE.S} {
    position: absolute;
    top: 1.8rem;
    left: 2.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 1rem;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 99;

    &:focus {
      outline: none;
    }

    &:hover {
      opacity: 0.8;
    }

    div {
      width: 1.3rem;
      height: 3px;
      background: ${({ isOpen }) => (isOpen ? 'rgba(255, 255, 255, 1)' : COLORS.GRAY)};
      transition: all 0.3s linear;
      position: relative;
      transform-origin: 1px;

      :first-child {
        transform: ${({ isOpen }) => (isOpen ? 'rotate(45deg)' : 'rotate(0)')};
      }

      /* :nth-child(2) {
        opacity: ${({ isOpen }) => (isOpen ? '0' : '1')};
        transform: ${({ isOpen }) => (isOpen ? 'translateX(20px)' : 'translateX(0)')};
      } */

      :nth-child(2) {
        width: ${({ isOpen }) => (isOpen ? '1.3rem' : '0.8rem')};
        transform: ${({ isOpen }) => (isOpen ? 'translateY(5px) rotate(-45deg)' : 'rotate(0)')};
      }
    }
  }
`;

const HamburgerIcon = (props) => {
  const { isHambugerOpen, setIsHambugerOpen } = props;
  return (
    <StyledBurger isOpen={isHambugerOpen} onClick={() => setIsHambugerOpen(!isHambugerOpen)}>
      <div />
      <div />
      {/* <div /> */}
    </StyledBurger>
  );
};

export default HamburgerIcon;
