import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import * as Mixins from '../../../styles/_mixins';
import { COLORS, FONT_SIZE } from '../../../styles/_variables';
import { REBAS_INTUR } from './Consts';
import TagSection from '../../../components/TagSection';
import web_0 from './Screenshot/web_0.png';
import Mobile_0 from './Screenshot/mobile_0.png';
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
    width: 40%
  }
  .wrapper{
    .title{
      opacity: 0.7;
      letter-spacing: 2px;
      font-size: ${FONT_SIZE.WEB.TITLE};
      margin: 0 0 1.5rem;
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
      margin: 4rem 0 ;
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

  .screenshots{
    display: flex;
    flex-direction: column;
    position: relative;
    background: wheat;
    img{
      width: 100%;
    }
    &--web{
    display: block;
    ${props => Mixins.imgShadow(props.isDark)};
    width: 50%;
    }
    &--mob{
      display: block;
      ${props => Mixins.imgShadow(props.isDark)};
      width: 20%;
      transform: scale(0.7);
      position: absolute;
      top: 0;
    }
  }
`;


const Rebas = (props) => {
  const { isDark } = props;


  return (
    <Div isDark={isDark}>
      <div className="wrapper">
        <div className='title'>
          Inturduction
        </div>
        <div className='content'>
          <div className="text">
            {REBAS_INTUR.content}
          </div>
          <TagSection
            isDark={isDark}
            label="In charge of: "
            tags={['Mockup', 'Front-End Development']}
          />
          {/* {REBAS_INTUR.content} */}
          <div className="visit-btn" onClick={() => window.open('https://www.rebas.tw/')}>
            Visit Site ⇀
            <div className='visit-btn--line' />
          </div>
        </div>
      </div>
      <div className="wrapper">
        <div className='title'>
          The wireframes that owner provided
        </div>
        <div className='content'>
          <img src={draft_0} alt />
          <img src={draft_1} alt />
        </div>
      </div>
      {/* <div className="screenshots">
        <div className='screenshots--web'>
          <img src={web_0} alt="" />
        </div>
        <div className='screenshots--mob'>
          <img src={Mobile_0} alt="" />
        </div>
      </div> */}

    </Div>
  );
};

const mapStateToProps = (state) => ({
  isDark: state.common.isDark,
});

const mapDispatchToProps = {
};

export default compose(connect(mapStateToProps, mapDispatchToProps))(Rebas);
