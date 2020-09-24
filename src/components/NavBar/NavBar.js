import React, { useEffect, useState, Fragment } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import _debounce from 'lodash/debounce';
import { NAV_BAR_INFO } from './NavBarConsts';
import HamburgerMenu from './HamburgerMenu';
import HamburgerIcon from './HamburgerIcon';
import { COLORS, FONT_FAMILY, FONT_SIZE } from '../../styles/_variables';
import Switch from '../../components/Switch';
import { RWD_SIZE } from '../../styles/_variables';

const StyledNavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 1.2rem 8%;
  letter-spacing: 2px;
  background: ${props => props.isDark ? COLORS.BLACK : '#FFFFFF'};
  color: ${props => props.isDark ? COLORS.WHITE : COLORS.BLACK};

  .left-box {
    display: flex;
    align-self: center;
    .site-name{
      text-decoration: none;
      font-family: ${FONT_FAMILY.SITE_NAME};
      font-weight: 600;
      font-size: ${FONT_SIZE.WEB.BASE};
      padding: 1rem;
      background: #acbac1;
      color: ${props => props.isDark ? COLORS.BLACK : COLORS.WHITE};
      margin-right: 2rem;
      box-shadow: 3px 4px 8px 0px ${props => props.isDark ? '#598683' : '#6F6F6F'};
      cursor: pointer;
      &:hover{
        box-shadow: 3px 2px 4px 0px ${props => props.isDark ? '#598683' : '#6F6F6F'};
        transition: .5s ease all;
      }
    }
  }

  .right-box {
    display: flex;
    align-items: flex-start;
    font-size: ${FONT_SIZE.WEB.BASE};
    padding: 0rem 1rem;
  }

  .switch-box{
    align-self: center;
    padding-left: 1.5rem;
    border-left: 1px solid #7f939c;
    display: flex;
    align-items: center;
    font-size: 0.6rem;
    justify-content: space-between;
    width: 9rem;
    justify-content: space-between;
  }

  @media ${RWD_SIZE.S} {
    justify-content: flex-end;
    padding: 1.8rem 5% 1rem;
    .left-box {
      display: none;
    }
    
    .right-box {
     padding: 0
    }
  }
`;

const StyledNavLink = styled(NavLink)`
  margin: 0rem 2rem 0.3rem;
  text-decoration: none;
  color: ${props => props.isDark ? COLORS.WHITE : COLORS.BLACK};
  opacity: 0.4;

  &.current{
    opacity: 1;
    &:after {
      content: '';
      display: block;
      border-bottom: 4px solid #7f939c;
      width: 2rem;
      height: 0.4rem;
      transition: width 0.6s ease all;
    }
  }

  &:hover{
    opacity: .8;
  }

  @media ${RWD_SIZE.S} {
    margin: 0rem 1rem 0rem;
    font-size: ${FONT_SIZE.MOB.BASE};
  }
`

const NavBar = (props) => {
  const { isDark, switchThemeColor, isHamMenuOpen, setHamMenuStatus } = props

  useEffect(() => {
    window.addEventListener('resize', reportWindowSize);
    reportWindowSize();

    return () => window.removeEventListener('resize', reportWindowSize);
  }, [])

  const reportWindowSize = _debounce(() => {
    if (window.innerWidth > 500) {
      setHamMenuStatus(false)
    }
  }, 600);

  return (
    <Fragment>
      <StyledNavBar isDark={isDark}>
        <div className="left-box">
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
        </div>
        <div className="right-box">
          {NAV_BAR_INFO.map(item => (
            <StyledNavLink
              isDark={isDark}
              to={item.path}
              activeClassName="current"
            >
              {item.label}
            </StyledNavLink>
          ))}
        </div>
      </StyledNavBar>
      <HamburgerIcon isOpen={isHamMenuOpen} setIsOpen={setHamMenuStatus} />
      <HamburgerMenu
        isDark={isDark}
        switchThemeColor={switchThemeColor}
        isOpen={isHamMenuOpen}
        setIsOpen={setHamMenuStatus}
      />
    </Fragment>
  );
};

NavBar.defaultProps = {};

export default NavBar;
