import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import * as Mixins from '../../../styles/_mixins';
import { COLORS, FONT_SIZE, RWD_SIZE } from '../../../styles/_variables';
import { WEB_CONTENT, IMG } from './Consts';

const Div = styled.div`
  ${props => Mixins.bgBase(props.isDark)};
  padding: 5rem 18% 6rem;
  display: flex;
  flex-direction: column;
  letter-spacing: 1.5px;
  font-size: ${FONT_SIZE.WEB.BASE};
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
      &--text{
        white-space: pre-line;
        line-height: 1.8rem;
        word-break: break-word;
        width: 100%
      }
      &.screenShot{
        flex-direction: row;
        flex-wrap: wrap;
        width: 100%;
        img{
          width: calc((100% - 60px)/3);
          margin: 0 10px;
        }
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

  @media ${RWD_SIZE.XS} {
    padding: 2rem 10% 6rem;
    font-size: ${FONT_SIZE.MOB.BASE};
    .wrapper{
      display: flex;
      flex-direction: column;
      align-items: center;
      &:not(:first-child){
        &:before{
          margin: 4rem 0;
          }
        }
      .subtitle{
        text-align: center;
      }
      .title{
        letter-spacing: 2px;
        font-size: ${FONT_SIZE.MOB.TITLE};
        margin: 0 0 1.8rem;
        text-align: center;
      }
      .content{
        display: flex;
        flex-direction: column;
        &--text{
          text-align: center;
          width: 100%;
        }
        &.screenShot{
          flex-direction: column;
          align-items: center;
          img{
            width: 70%;
            margin: 5px 0;
          }
        }
      }
      
    } 
  }
`;

const PregameAnalysis = (props) => {
  const { isDark } = props;

  return (
    <Div isDark={isDark}>
      <div className="wrapper">
        <div className="subtitle">| React、Recharts、Styled-Components |</div>
        <div className='title'>
          Intorduction
        </div>
        <div className='content'>
          <div className='content--text'>
            {WEB_CONTENT.SECTION_ONE__FIRST}
          </div>
        </div>
      </div>
      <div className="wrapper">
        <div className='title'>
          中信兄弟
        </div>
        <div className='content screenShot'>
          <img src={IMG.page1_1} alt='' />
          <img src={IMG.page2_1} alt='' />
          <img src={IMG.page3_1} alt='' />
        </div>
      </div>
      <div className="wrapper">
        <div className='title'>
          富邦悍將
        </div>
        <div className='content screenShot'>
          <img src={IMG.page1_2} alt='' />
          <img src={IMG.page2_2} alt='' />
          <img src={IMG.page3_2} alt='' />
        </div>
      </div>
      <div className="wrapper">
        <div className='title'>
          統一7-ELEVEn獅
        </div>
        <div className='content screenShot'>
          <img src={IMG.page1_3} alt='' />
          <img src={IMG.page2_3} alt='' />
          <img src={IMG.page3_3} alt='' />
        </div>
      </div>
      <div className="wrapper">
        <div className='title'>
          味全龍
        </div>
        <div className='content screenShot'>
          <img src={IMG.page1_4} alt='' />
          <img src={IMG.page2_4} alt='' />
          <img src={IMG.page3_4} alt='' />
        </div>
      </div>
      <div className="wrapper">
        <div className='title'>
          樂天桃園
        </div>
        <div className='content screenShot'>
          <img src={IMG.page1_5} alt='' />
          <img src={IMG.page2_5} alt='' />
          <img src={IMG.page3_5} alt='' />
        </div>
      </div>
    </Div >
  );
};

const mapStateToProps = (state) => ({
  isDark: state.common.isDark,
});

const mapDispatchToProps = {
};

export default compose(connect(mapStateToProps, mapDispatchToProps))(PregameAnalysis);
