import React, { useState, useEffect, Fragment } from 'react';
import styled from 'styled-components';
import { NAV_BAR_INFO } from './NavBarConsts';
import { COLORS, FONT_FAMILY, RWD_SIZE } from '../../styles/_variables';
import Switch from '../../components/Switch';

const StyledMenu = styled.div`
  display: none;
  letter-spacing: 1px;
  font-size: 0.9rem;
  @media ${RWD_SIZE.S} {
    letter-spacing: 2px;
    width: 45%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: rgb(152, 167, 175, 0.7);
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
    backdrop-filter: blur(3px);

    .site-name{
      width: 3rem;
      font-family: ${FONT_FAMILY.SITE_NAME};
      font-weight: 600;
      font-size: 1rem;
      padding: 1rem;
      background: #acbac1;
      color: ${props => props.isDark ? COLORS.BLACK : COLORS.WHITE};
      margin: 1rem 0 2.5rem;
      box-shadow: 3px 4px 8px 0px #6F6F6F;
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
      width: 9rem;
      justify-content: space-between;
      color: ${props => props.isDark ? COLORS.BLACK : COLORS.WHITE};
    }
  }
`;

const HamburgerMenu = (props) => {
  const { isHambugerOpen, isDark, switchThemeColor } = props;
  return (
    <StyledMenu isOpen={isHambugerOpen} isDark={isDark}>
      <div className="site-name">
        Jin Chiu
      </div>
      <div className="switch-box">
        LIGHT
            <Switch
          checked={isDark}
          onChange={switchThemeColor}
          color="#4c4c4c"
        />
            DARK
          </div>
    </StyledMenu>
  );
};

export default HamburgerMenu;
