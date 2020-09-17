import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import * as Mixins from '../../../styles/_mixins';
import { COLORS, FONT_SIZE, RWD_SIZE } from '../../../styles/_variables';
import { WEB_INTUR } from './Consts';
import TagSection from '../../../components/TagSection';

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
    .title{
      opacity: 0.7;
      letter-spacing: 2px;
      font-size: ${FONT_SIZE.WEB.TITLE};
      margin: 0 0 1.5rem;
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
    .screenshots{
      margin: 2rem 0 0;
      justify-content: unset;
      img{
        width: 100%;
      }
    }
  }
`;

const MyWeb = (props) => {
  const { isDark } = props;

  return (
    <Div isDark={isDark}>
      <div className="wrapper">
        <div className='title'>
          設計理念
        </div>
        <div className='content'>
          <div className="text">
            {WEB_INTUR.content}
          </div>
          {/* <TagSection
            isDark={isDark}
            label="In charge of: "
            tags={['Mockup', 'Front-End Development']}
          /> */}
        </div>
      </div>
      <div className="wrapper">
        <div className='title'>
          The wireframes that owner provided
        </div>
        <div className='content'>
        </div>
      </div>
      <div className="wrapper">
        <div className='title'>
          Full size screenshot
        </div>
        <div className='content'>
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

export default compose(connect(mapStateToProps, mapDispatchToProps))(MyWeb);
