import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import * as Mixins from '../../../styles/_mixins';
import { COLORS, FONT_SIZE, RWD_SIZE } from '../../../styles/_variables';
import { REBAS_CONTENT } from './Consts';
import TagSection from '../../../components/TagSection';
import web_0 from './Screenshot/web_0.png';
import mobile_0 from './Screenshot/mobile_0.png';
import draft_0 from './Screenshot/draft_0.png';
import draft_1 from './Screenshot/draft_1.png';

const Div = styled.div`
  ${props => Mixins.bgBase(props.isDark)};
  padding: 5rem 18% 6rem;
  display: flex;
  flex-direction: column;
  letter-spacing: 1.5px;
  font-size: ${FONT_SIZE.WEB.BASE};
  img{
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
      .text{
        white-space: pre-line;
        line-height: 1.5rem;
        word-wrap:break-word;
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

  .visit-btn{
    margin: 4rem 0 0;
    width: 6.5rem;
    padding: 2rem 0.8rem 0.8rem;
    background: ${COLORS.LIGHT_GRAY};
    color: ${props => props.isDark ? COLORS.BLACK : COLORS.WHITE};
    cursor: pointer;
    position: relative;
    &--line{
      border: 1px solid ${props => props.isDark ? COLORS.WHITE : COLORS.BLACK};;
      width: 95%;
      height: 95%;
      position: absolute;
      top: 8px;
      right: 10px;
      &:hover{
        transition: .5s ease all;
        transform: translateX(-4px);
      }
    }
  }

  .drafts{
    display: flex;
    justify-content: space-around;
    margin: 3rem 0 0;
    img{
      width: 40%;
    }
  }

  .screenshots{
    display: flex;
    justify-content: center;
    position: relative;
    margin: 3rem 0 0;
    img{
      width: 100%;
    }
    &--web{
    width: 75%;
    }
    &--mob{
      width: 20%;
      transform: scale(0.65);
      position: absolute;
      top: -20rem;
      right: -1rem;
    }
  }

  @media ${RWD_SIZE.XS} {
    padding: 4rem 12% 6rem;
    font-size: ${FONT_SIZE.MOB.BASE};
    .wrapper{
      display: flex;
      flex-direction: column;
      align-items: center;
      .subtitle{
        text-align: center;
      }
      .title{
        letter-spacing: 2px;
        font-size: ${FONT_SIZE.MOB.TITLE};
        margin: 0 0 1.5rem;
        text-align: center;
      }
      .content{
        display: flex;
        flex-direction: column;
        .text{
          white-space: pre-line;
          line-height: 1.5rem;
          word-wrap:break-word;
          text-align: center;
        }
      }
      &:not(:first-child){
        &:before{
          margin: 4rem 0;
          }
        }
      }
    .visit-btn{
      align-self: center;
    }
    .drafts{
      flex-direction: column;
      align-items: center;
      margin: 2rem 0 0;
      img{
        width: 70%;
        &:not(:first-child){
          margin: 1.5rem 0 0;
        }
      }
    }
    .screenshots{
      margin: 2rem 0 0;
      justify-content: unset;
      img{
        width: 100%;
      }
      &--web{
      width: 90%;
      }
      &--mob{
        width: 25%;
        transform: scale(0.65);
        position: absolute;
        top: -7rem;
        right: -1.5rem;
      }
    }
  }
`;

const Rebas = (props) => {
  const { isDark } = props;

  return (
    <Div isDark={isDark}>
      <div className="wrapper">
        <div className="subtitle">| React、Styled-Components、Axios、Sketch、Illustrator |</div>
        <div className='title'>
          Intorduction
        </div>
        <div className='content'>
          <div className="text">
            {REBAS_CONTENT.INTOR}
          </div>
          <div className="visit-btn" onClick={() => window.open('https://www.rebas.tw/')}>
            Visit Site ⇀
            <div className='visit-btn--line' />
          </div>
        </div>
      </div>
      <div className="wrapper">
        <div className='title'>
          Design Concept
        </div>
        <div className='content'>
          <div className="text">
            {REBAS_CONTENT.CONCEPT}
          </div>
        </div>
      </div>
      <div className="wrapper">
        <div className='title'>
          The wireframes that client provided
        </div>
        <div className='content'>
          <div className="drafts">
            <img src={draft_0} alt />
            <img src={draft_1} alt />
          </div>
        </div>
      </div>
      <div className="wrapper">
        <div className='title'>
          Full size screenshot
        </div>
        <div className='content'>
          <div className="screenshots">
            <div className='screenshots--web'>
              <img src={web_0} alt="" />
            </div>
            <div className='screenshots--mob'>
              <img src={mobile_0} alt="" />
            </div>
          </div>
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

export default compose(connect(mapStateToProps, mapDispatchToProps))(Rebas);
