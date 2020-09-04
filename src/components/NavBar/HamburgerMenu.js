import React, { useState, useEffect, Fragment } from 'react';
import styled from 'styled-components';
import { NAV_BAR_INFO } from './NavBarConsts';

const StyledMenu = styled.div`
  display: none;
  letter-spacing: 1px;
  font-size: 0.9rem;
  @media (max-width: 500px) {
    width: 45%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: rgb(17, 60, 113, 0.85);
    height: 100vh;
    text-align: left;
    padding: 5rem 0 2rem;
    position: absolute;
    top: 0;
    left: 0;
    transition: transform 0.4s ease-in-out;
    z-index: 10;
    box-shadow: 2px 0px 15px 0 rgba(0, 0, 0, 0.5);
    transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(-150%)')};

    .logo {
      display: flex;
      flex-direction: column;
      align-items: center;
      border-bottom: 1px solid rgb(255, 255, 255, 0.3);
      padding: 0 1.5rem;
      margin-bottom: 1.5rem;
      &--pic {
        width: 2.5rem;
        &:hover {
          opacity: 0.8;
        }
      }
      &--text {
        color: rgb(255, 255, 255, 1);
        font-size: 1rem;
        font-weight: 600;
        letter-spacing: 3px;
        margin: 0.8rem 0;
        &:hover {
          opacity: 0.8;
        }
      }
    }

    .link-btn {
      display: block;
      color: rgb(255, 255, 255, 1);
      border-bottom: 4px solid white;
      border-color: transparent;
      padding: 0.25rem 0rem;
      text-align: center;
      margin-bottom: 1.5rem;
      &:hover {
        cursor: pointer;
        border-color: #25eeff;
      }
    }
  }
`;

const HamburgerMenu = (props) => {
  const { isHambugerOpen } = props;
  return (
    <StyledMenu isOpen={isHambugerOpen}>
      <a className="logo" href={NAV_BAR_INFO.LOGO.url}>
        <img className="logo--pic" src="/icon/logo.png" alt="" />
        <div className="logo--text"> {NAV_BAR_INFO.LOGO.text} </div>
      </a>
    </StyledMenu>
  );
};

export default HamburgerMenu;
