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
    }
    .text-n-img{
      display: flex;
      flex-direction: row;
      width: 100%;
      &:not(:first-child){
        margin: 5rem 0 0;
      }
      &--text{
        white-space: pre-line;
        line-height: 1.8rem;
        word-break: break-word;
        width: 60%;
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

  .img{
    &--switchColor{
      width: 25%;
      margin: 0 2rem;
    }
  }

  .pantone-box{
    display: flex;
    width: 45%;
    margin: 0 2rem 0 0;
    &--pantone{
      margin: 0 0.5rem;
    }
  }
  
  .animation-box{
    display: flex;
    justify-content: space-around;
    margin: 4rem 0 0;
    &--animation{
      &-1{
        width: 18%;
      }
      &-2{
        width: 30%;
      }
      &-3{
        width: 20%;
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
      }
      .text-n-img{
        display: flex;
        flex-direction: column;
        width: 100%;
        align-items: center;
        &:not(:first-child){
          margin: 3rem 0 0;
        }
        &--text{
          text-align: center;
          width: 100%;
        }
      }
    }
    .img{
      &--switchColor{
        width: 55%;
        margin: 1rem 0 0;
      }
    }
    .pantone-box{
      width: 80%;
      margin: 0 0 1rem;
      &--pantone{
        margin: 0 0.2rem;
      }
    }
    .animation-box{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: unset;
      margin: 2rem 0 0;
      div:not(:first-child){
        margin: 1rem 0 0;
      }
      &--animation{
        margin: 1.5rem 0;
        &-1{
          width: 30%;
        }
        &-2{
          width: 70%;
        }
        &-3{
          width: 50%;
        }
      }
    }
    .screenshot-box{
      display: flex;
      margin: 3rem 0 2rem;
      position: relative;
      &--L{
        margin: 0 0 0 6.5%;
        width: 85%;
      }
      &--M{
        position: absolute;
        width: 25%;
        right: -8%;
        bottom: 0%;
      }
      &--S{
        position: absolute;
        width: 10%;
        bottom: 0%;
        left: -2%;
        z-index: 2;
      }
    }
  }
`;

const MyWeb = (props) => {
  const { isDark } = props;

  return (
    <Div isDark={isDark}>
      <div className="wrapper">
        <div className="subtitle">| React、Redux、Styled-Components |</div>
        <div className='title'>
          Design Concept
        </div>
        <div className='content'>
          <div className='text-n-img'>
            <div className='text-n-img--text'>
              {WEB_CONTENT.SECTION_ONE__FIRST}
            </div>
            <div className='img--switchColor'>
              <img src={IMG.switchColor} alt='' />
            </div>
          </div>
          <div className='text-n-img'>
            <div className='pantone-box'>
              <div className='pantone-box--pantone'>
                <img src={IMG.pantonef9f9f9} alt='' />
              </div>
              <div className='pantone-box--pantone'>
                <img src={IMG.pantone333333} alt='' />
              </div>
            </div>
            <div className='text-n-img--text'>
              {WEB_CONTENT.SECTION_ONE__SECOND}
            </div>
          </div>
        </div>
      </div>
      <div className="wrapper">
        <div className='title'>
          Interaction
        </div>
        <div className='content'>
          <div className='content--text'>
            {WEB_CONTENT.SECTION_TWO__FIRST}
          </div>
          <div className='animation-box'>
            <div className='animation-box--animation-1'>
              <img src={IMG.animation1} alt='' />
            </div>
            <div className='animation-box--animation-2'>
              <img src={IMG.animation2} alt='' />
            </div>
            <div className='animation-box--animation-3'>
              <img src={IMG.animation3} alt='' />
            </div>
          </div>
        </div>
      </div>
      <div className="wrapper">
        <div className='title'>
          Full size screenshot
        </div>
        <div className='content'>
          <div className='screenshot-box'>
            <div className='screenshot-box--S'>
              <img src={IMG.w_s} alt='' />
            </div>
            <div className='screenshot-box--L'>
              <img src={IMG.w_l} alt='' />
            </div>
            <div className='screenshot-box--M'>
              <img src={IMG.w_m} alt='' />
            </div>
          </div>
          <div className='screenshot-box'>
            <div className='screenshot-box--L'>
              <img src={IMG.b_l} alt='' />
            </div>
            <div className='screenshot-box--M'>
              <img src={IMG.b_m} alt='' />
            </div>
            <div className='screenshot-box--S'>
              <img src={IMG.b_s} alt='' />
            </div>
          </div>
          <div className='screenshot-box'>
            <div className='screenshot-box--S'>
              <img src={IMG.w2_s} alt='' />
            </div>
            <div className='screenshot-box--L'>
              <img src={IMG.w2_l} alt='' />
            </div>
            <div className='screenshot-box--M'>
              <img src={IMG.w2_m} alt='' />
            </div>
          </div>
          <div className='screenshot-box'>
            <div className='screenshot-box--L'>
              <img src={IMG.b2_l} alt='' />
            </div>
            <div className='screenshot-box--M'>
              <img src={IMG.b2_m} alt='' />
            </div>
            <div className='screenshot-box--S'>
              <img src={IMG.b2_s} alt='' />
            </div>
          </div>
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

export default compose(connect(mapStateToProps, mapDispatchToProps))(MyWeb);
