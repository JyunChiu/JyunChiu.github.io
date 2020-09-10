import React, { Fragment } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import ScrollToTop from "react-scroll-up";
import * as CommonActions from '../../redux/CommonActions';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import { COLORS } from '../../styles/_variables';
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";



const Div = styled.div`
  position: relative;

  .icon-box{
    display: flex;
    flex-direction: column;
    position: fixed;
    bottom: 12rem;
    left: 3rem;
  }

  .scroll-up-btn{
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    background: ${props => props.isDark ? COLORS.WHITE : COLORS.BLACK};
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 3px 8px 0px ${props => props.isDark ? '#598683' : '#929292'};
    .arrow {
      width: .5rem;
      height: .5rem;
      border-bottom: 3px solid;
      border-left: 3px solid;
      border-color: ${props => props.isDark ? COLORS.GRAY : '#acbac1'};
      transform: rotate(135deg);
      margin-top: 0.3rem;
    }
  }

`

const App = (props) => {
  const {
    isDark,
    switchThemeColor
  } = props;

  console.log('eee', isDark)
  return (
    <Div isDark={isDark}>
      <NavBar
        isDark={isDark}
        switchThemeColor={switchThemeColor}
      />
      <div>
        {props.children}
      </div>
      <Footer
        isDark={isDark}
      />
      <div className="icon-box">
        <FaFacebookF />
        <FaLinkedinIn />
      </div>

      <ScrollToTop
        showUnder={80}
        style={{
          bottom: 80,
          right: 50
        }}
      >
        <div className="scroll-up-btn">
          <div className="arrow" />
        </div>
      </ScrollToTop>
    </Div >
  );
}

const mapStateToProps = (state) => ({
  isDark: state.common.isDark,
});

const mapDispatchToProps = {
  switchThemeColor: CommonActions.switchThemeColor,
};

export default compose(connect(
  mapStateToProps,
  mapDispatchToProps
))(App);


