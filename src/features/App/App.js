import React, { Fragment } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import ScrollToTop from "react-scroll-up";
import * as CommonActions from '../../redux/CommonActions';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import { COLORS, RWD_SIZE } from '../../styles/_variables';
import SocialBox from '../../components/SocialBox';



const Div = styled.div`
  position: relative;

  .social-box{
    display: flex;
    flex-direction: column;
    position: fixed;
    bottom: 5rem;
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

  @media ${RWD_SIZE.S} {
    .social-box{
      display:none;
    }
  }

`

const App = (props) => {
  const {
    isDark,
    switchThemeColor
  } = props;


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
      <div className="social-box">
        <SocialBox
          isDark={isDark}
          direction="column"
        />
      </div>

      <ScrollToTop
        showUnder={80}
        style={{
          bottom: window.innerWidth > 500 ? 60 : 50,
          right: window.innerWidth > 500 ? 80 : 20
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


