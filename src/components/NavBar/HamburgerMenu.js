import React, { useState, useEffect, Fragment } from 'react';
import styled from 'styled-components';
import { NAV_BAR_INFO } from './NavBarConsts';
import { NavLink } from 'react-router-dom';
import { COLORS, FONT_FAMILY, RWD_SIZE } from '../../styles/_variables';
import Switch from '../../components/Switch';
import SocialBox from '../../components/SocialBox';

const BelowDiv = styled.div`
  display: ${({ isOpen }) => isOpen ? 'unset' : 'none'};
  width: 100vw;
  height: 100%;
  opacity: ${({ isOpen }) => isOpen ? 1 : 0};
  transition: opacity 0.6s ease;
  background: #8c8c8c96;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
`

const StyledMenu = styled.div`
  display: none;
  letter-spacing: 1px;
  font-size: 0.9rem;
  letter-spacing: 2px;
  height: 95%;
  text-align: right;
  padding: 5rem 0 0rem;
  background: rgb(152, 167, 175, 0.7);
  @media ${RWD_SIZE.S} {
    width: 18rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    transition: transform 0.4s ease-in-out;
    z-index: 10;
    box-shadow: 2px 0px 15px 0 rgba(0, 0, 0, 0.5);
    transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(-150%)')};
    backdrop-filter: blur(3px);

    .site-name{
      text-decoration: none;
      width: 5rem;
      font-family: ${FONT_FAMILY.SITE_NAME};
      font-weight: 600;
      font-size: 1rem;
      padding: 1rem;
      background: #acbac1;
      color: ${props => props.isDark ? COLORS.BLACK : COLORS.WHITE};
      margin: 1rem 0 2.5rem;
      box-shadow: 3px 4px 8px 0px #6F6F6F;
      cursor: pointer;
      &:hover{
        box-shadow: 3px 2px 4px 0px #6F6F6F;
        transition: .5s ease all;
      }
    }

    .switch-box{
      align-self: center;
      padding-top: 2rem;
      border-top: 1px solid #7f939c;
      border-color: ${props => props.isDark ? COLORS.BLACK : COLORS.WHITE};
      display: flex;
      align-items: center;
      font-size: 0.6rem;
      justify-content: space-between;
      width: 10rem;
      justify-content: space-between;
      color: ${props => props.isDark ? COLORS.BLACK : COLORS.WHITE};
    }

    .menu--social-box{
      margin-top: 2rem;
    }
  }
  @media ${RWD_SIZE.XS} {
    width: 15rem;
    .site-name{
      width: 3rem;
    }
  }
`;

const HamburgerMenu = (props) => {
  const { isOpen, isDark, switchThemeColor, setIsOpen } = props;
  return (
    <Fragment>
      <StyledMenu isOpen={isOpen} isDark={isDark}>
        <NavLink
          className="site-name"
          to={{
            pathname: '/portfolio',
            state: { isBack: true }
          }}
        >
          Jin Chiu
      </NavLink>
        <div className="switch-box">
          LIGHT
        <Switch
            checked={isDark}
            onChange={switchThemeColor}
            color="#4c4c4c"
          />
          DARK
      </div>
        <div className="menu--social-box">
          <SocialBox
            isMenu
            isDark={isDark}
            direction="column"
          />
        </div>
      </StyledMenu>
      <BelowDiv isOpen={isOpen} onClick={() => setIsOpen(false)} />
    </Fragment>
  );
};

export default HamburgerMenu;
