import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import * as Mixins from '../../../styles/_mixins';
import { COLORS, FONT_SIZE, RWD_SIZE } from '../../../styles/_variables';
import { REBAS_INTUR } from './Consts';
import TagSection from '../../../components/TagSection';

const Div = styled.div`
  ${props => Mixins.bgBase(props.isDark)};
  display: flex;
  flex-direction: column;
  letter-spacing: 1.5px;
  font-size: ${FONT_SIZE.WEB.BASE};
  

  @media ${RWD_SIZE.XS} {
  
  }
`;

const DailyPractice = (props) => {
  const { isDark } = props;

  return (
    <Div isDark={isDark}>
      DailyPractice
    </Div>
  );
};

const mapStateToProps = (state) => ({
  isDark: state.common.isDark,
});

const mapDispatchToProps = {
};

export default compose(connect(mapStateToProps, mapDispatchToProps))(DailyPractice);
