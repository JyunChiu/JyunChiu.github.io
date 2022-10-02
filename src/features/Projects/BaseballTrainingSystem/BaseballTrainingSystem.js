import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import * as Mixins from '../../../styles/_mixins';
import { COLORS, FONT_SIZE, RWD_SIZE } from '../../../styles/_variables';
import ReactPlayer from 'react-player';
import { WEB_CONTENT, IMG } from './Consts';

const Div = styled.div`
  ${props => Mixins.bgBase(props.isDark)};
  padding: 5rem 18% 6rem;
  display: flex;
  flex-direction: column;
  img{
    width: 100%;
    ${props => Mixins.imgShadow(props.isDark)};
  }
  .wrapper{
    .subtitle{
      opacity: 0.5;
      font-size: ${FONT_SIZE.MOB.BASE};
      margin: 0 0 0.6rem;
    }
    .title{
      opacity: 0.7;
      letter-spacing: 2px;
      font-size: ${FONT_SIZE.WEB.TITLE};
      margin: 0 0 2rem;
      line-height: 2rem;
    }
    .content{
      display: flex;
      flex-direction: column;
      align-items: center;
      >div{
        &:not(:last-child){
          margin: 0 0 20px
        }
      }
      &--text{
        white-space: pre-line;
        line-height: 1.8rem;
        word-break: break-word;
        width: 100%
      }
    } 
    &:not(:first-child){
      &:before{
        content: '';
        display: inline-block;
        width: 100%;
        height: 1px;
        opacity: 0.3;
        margin: 6rem 0;
        background: ${props => props.isDark ? COLORS.WHITE : COLORS.BLACK};
      }
    }
  }
  .screenshot-box{
    display: flex;
    align-items: center;
    margin: 4rem 0 2rem;
    position: relative;
    &--L{
      margin: 0 0 0 9%;
      width: 75%;
      &.noMargin{
        margin: 0
      }
    }
    &--M{
      position: absolute;
      width: 25%;
      right: -5%;
      bottom: 0%;
    }
    &--S{
      position: absolute;
      width: 10%;
      bottom: 0%;
      left: 0%;
      z-index: 2;
    }
  }
`;

const BaseballTrainingSystem = (props) => {
  const { isDark } = props;

  return (
    <Div isDark={isDark}>
      <div className="wrapper">
        <div className="subtitle">| React、Redux、D3、Styled-Components |</div>
        <div className='title'>
          Data List
        </div>
        <div className='content'>
          <ReactPlayer
            url={IMG.video1}
            width='100%'
            height="auto"
            controls={true}
          />
        </div>
      </div>
      <div className="wrapper">
        <div className='title'>
          Graphic
        </div>
        <div className='content'>
          <ReactPlayer
            url={IMG.video2}
            width='100%'
            height="auto"
            controls={true}
          />
          <ReactPlayer
            url={IMG.video3}
            width='80%'
            height="auto"
            controls={true}
          />
        </div>
      </div>
    </Div>
  );
};

const mapStateToProps = (state) => ({
  isDark: state.common.isDark,
});

const mapDispatchToProps = {
};

export default compose(connect(mapStateToProps, mapDispatchToProps))(BaseballTrainingSystem);
