import React, { useState, useEffect, Fragment } from 'react';
import styled from 'styled-components';

const StyledBurger = styled.button`
  display: none;
  @media (max-width: 500px) {
    position: absolute;
    top: 1.5rem;
    left: 2.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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
      background: ${({ isOpen }) => (isOpen ? 'rgba(255, 255, 255, 1)' : 'rgba(10, 74, 154, 1)')};
      transition: all 0.3s linear;
      position: relative;
      transform-origin: 1px;

      :first-child {
        transform: ${({ isOpen }) => (isOpen ? 'rotate(45deg)' : 'rotate(0)')};
      }

      :nth-child(2) {
        opacity: ${({ isOpen }) => (isOpen ? '0' : '1')};
        transform: ${({ isOpen }) => (isOpen ? 'translateX(20px)' : 'translateX(0)')};
      }

      :nth-child(3) {
        transform: ${({ isOpen }) => (isOpen ? 'rotate(-45deg)' : 'rotate(0)')};
      }
    }
  }
`;

const HamburgerIcon = (props) => {
  const { isHambugerOpen, setIsHambugerOpen } = props;
  return (
    <StyledBurger isOpen={isHambugerOpen} onClick={() => setIsHambugerOpen(!isHambugerOpen)}>
      <div />
      <div style={{ width: '0.8rem' }} />
      <div />
    </StyledBurger>
  );
};

export default HamburgerIcon;
