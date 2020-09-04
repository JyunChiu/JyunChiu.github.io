import React, { useState, Fragment } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { NAV_BAR_INFO } from './NavBarConsts';
import HamburgerMenu from './HamburgerMenu';
import HamburgerIcon from './HamburgerIcon';
import { COLORS, FONT_FAMILY, FONT_SIZE } from '../../styles/_variables'
import Switch from '../../components/Switch'


const StyledNavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 1rem 5rem 1rem 4rem;
  letter-spacing: 2px;
  background: ${props => props.isDark ? COLORS.BLACK : COLORS.WHITE};
  color: ${props => props.isDark ? COLORS.WHITE : COLORS.BLACK};
  height: 4rem;

  .left-box {
    display: flex;
    align-self: center;
    .site-name{
      font-family: ${FONT_FAMILY.SITE_NAME};
      font-weight: 600;
      font-size: 1rem;
      padding: 1rem;
      background: #acbac1;
      color: ${props => props.isDark ? COLORS.BLACK : COLORS.WHITE};
      margin-right: 2rem;
    }
  }

  .right-box {
    display: flex;
    align-items: flex-start;
    font-size: 1rem;
    /* background: wheat; */
    padding: 0rem 1rem;
  }

  .switch-box{
    /* background: red; */
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

  @media (max-width: 500px) {
    .left-box .logo {
      display: none;
    }

    .right-box {
      .nav-items {
        display: none;
      }
    }
  }
`;

const StyledNavLink = styled(NavLink)`
  margin: 0rem 2rem 0;
  text-decoration: none;
  color: ${props => props.isDark ? COLORS.WHITE : COLORS.BLACK};
  opacity: 0.4;

  &.active{
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
`

const NavBar = (props) => {
  const { isDark, switchThemeColor } = props
  const [isHambugerOpen, setIsHambugerOpen] = useState(false);

  return (
    <Fragment>
      <StyledNavBar isDark={isDark}>
        <div className="left-box">
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
        </div>
        <div className="right-box">
          {NAV_BAR_INFO.map(item => (
            <StyledNavLink
              isDark={isDark}
              to={item.path}
            >
              {item.label}
            </StyledNavLink>
          ))}
        </div>
      </StyledNavBar>
      {/* <HamburgerIcon isHambugerOpen={isHambugerOpen} setIsHambugerOpen={setIsHambugerOpen} />
      <HamburgerMenu isHambugerOpen={isHambugerOpen} /> */}
    </Fragment>
  );
};

NavBar.defaultProps = {};

export default NavBar;
