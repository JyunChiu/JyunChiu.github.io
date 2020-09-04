import React, { Fragment } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import * as CommonActions from '../../redux/CommonActions';
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'


const Div = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;

  .nav{
    width: 100%;
    /* position: absolute;
    top: 0 */
  }
  .fot{
    width: 100%;
    position: absolute;
    bottom: 0
  }

`


const App = (props) => {
  const {
    isDark,
    switchThemeColor
  } = props;

  return (
    <Div>
      <div className="nav">
        <NavBar
          isDark={isDark}
          switchThemeColor={switchThemeColor}
        />
      </div>
      <div>
        {props.children}
      </div>
      <div className="fot">
        <Footer />
      </div>
    </Div>
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


