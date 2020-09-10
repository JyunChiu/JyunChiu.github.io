import React, { useState, useEffect, Fragment } from 'react';
import styled from 'styled-components';
import { NAV_BAR_INFO } from './NavBarConsts';
import { COLORS, FONT_FAMILY, RWD_SIZE } from '../../styles/_variables';
import Switch from '../../components/Switch';

const StyledMenu = styled.div`
  display: none;
  letter-spacing: 1px;
  font-size: 0.9rem;
  letter-spacing: 2px;
  height: 100vh;
  text-align: right;
  padding: 5rem 0 2rem;
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
      width: 5rem;
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
      width: 10rem;
      justify-content: space-between;
      color: ${props => props.isDark ? COLORS.BLACK : COLORS.WHITE};
    }
  }
  @media ${RWD_SIZE.XS} {
    width: 15rem;
    .site-name{
      width: 3rem;
    }
    .switch-box{
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
