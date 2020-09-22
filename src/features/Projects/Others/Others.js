import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import * as Mixins from '../../../styles/_mixins';
import { COLORS, FONT_SIZE, RWD_SIZE } from '../../../styles/_variables';
import { WEB_CONTENT, IMG } from './Consts';

const Div = styled.div`
  ${props => Mixins.bgBase(props.isDark)};
 
`;

const NotFound = (props) => {
  const { isDark } = props;

  return (
    <Div isDark={isDark}>
      Building ...
    </Div>
  );
};

const mapStateToProps = (state) => ({
  isDark: state.common.isDark,
});

const mapDispatchToProps = {
};

export default compose(connect(mapStateToProps, mapDispatchToProps))(NotFound);
