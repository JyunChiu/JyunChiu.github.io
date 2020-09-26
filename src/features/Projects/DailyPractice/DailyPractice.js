import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import * as R from 'ramda';
import ReactPlayer from 'react-player';
import Scrollspy from 'react-scrollspy'
import * as Mixins from '../../../styles/_mixins';
import { COLORS, FONT_SIZE, RWD_SIZE } from '../../../styles/_variables';
import { MENU } from './Consts';

const Div = styled.div`
  ${props => Mixins.bgBase(props.isDark)};
  display: flex;
  letter-spacing: 1.5px;
  font-size: ${FONT_SIZE.WEB.BASE};
  justify-content: space-around;
  video, img{
    ${props => Mixins.imgShadow(props.isDark)};
    outline: none;
  }
  .menu-box{
    width: 18%;
    position: relative;
    .menu{
      display: flex;
      flex-direction: column;
      color: ${props => props.isDark ? COLORS.WHITE : COLORS.BLACK};
      background: ${props => props.isDark ? COLORS.BLACK : COLORS.WHITE};
      box-shadow: 0px 5px 10px 0px ${props => props.isDark ? '#4ea59f5c' : '#c7c7c796'};
      padding: 1rem 0;
      border-radius: 5px;
      position: sticky;
      top: 5%;
      &--item{
        opacity: 0.5;
        line-height: 1.5rem;
        padding: 0.4rem 1rem 0.4rem 2rem;
        cursor: pointer;
        margin: 1rem 0;
        margin-left: -2.5px;
        cursor: pointer;
        &.current{
          opacity: 1;
          border-left: 6px solid ${COLORS.GRAY};
          transition: .4s ease all;
        }
        &:hover{
          opacity: 0.8;
          transition: .4s ease all;
        }
      }
    }
  }
  
  .right-box{
    display: flex;
    flex-direction: column;
    width: 68%;
    letter-spacing: 2px;
  }

  @media ${RWD_SIZE.S} {
    .menu-box{
      width: 22%;
    }
    .right-box{
      width: 100%;
    }
  }

  @media ${RWD_SIZE.XS} {
    .menu-box{
      display: none;
    }
  }
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  &:not(:first-child){
    margin: 4rem 0 0;
  }
  .title{
    letter-spacing: 2px;
    font-size: 1.2rem;
    margin: 0 0 2rem;
    background: ${COLORS.GRAY};
    color: ${props => props.isDark ? COLORS.BLACK : COLORS.WHITE};
    padding: 0.8rem 2rem;
    width: 100%;
  }
  .content{
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: center;
  }
  .desc{
    display: flex;
    flex-direction: column;
    margin: 0.6rem 0 0 6%;
    width: 35%;
    &--year{
      width: auto;
      font-size: 0.8rem;
      opacity: 0.4;
    }
    &--box{
      padding: 0 0 0 1rem;
      border-left: 3px solid ${COLORS.LIGHT_GRAY};
      margin: 1.2rem 0 0rem;
      &--title{
        margin: 0.3rem 0;
        opacity: 0.5;
        font-weight: 900;
        font-size: 0.8rem;
      }
      &--content{
        word-wrap:break-word;
        line-height: 1.5rem;
      }
    }
  }
  .img-box{
    display: flex;
    flex-direction: column;
    width: 60%;
    align-items: center;
    img{
      width: 100%;
      &:not(:first-child){
      margin: 2rem 0 0;
      }
    }
  }

  @media ${RWD_SIZE.S} {
    .title{
      width: 90%;
    }
    .content{
      width: 95%;
    }
  }
  @media ${RWD_SIZE.XS} {
    &:not(:first-child){
    margin: 2rem 0 0;
  }
    .title{
      width: 88%;
      padding: 0.8rem 1.2rem;
    }
    .content{
      flex-direction: column;
      justify-content: unset;
      align-items: center;
    }
    .img-box{
      width: 95%;
    }
    .desc{
      width: auto;
      flex-direction: row;
      align-self: flex-start;
      align-items: flex-start;
      flex-wrap: wrap;
      margin: 1.5rem 0 0 0.6rem;
      &--year{
        width: 100%;
        margin: 1rem 0 0.6rem;
      }
      &--box{
        padding: 0 0 0 0.6rem;
        margin: 0.8rem 1.5rem 0.8rem 0;
      }
    }
  }
`

const DailyPractice = (props) => {
  const { isDark } = props;

  function handleClickTab(tabId) {
    const el = document.querySelector(`#anchor--${tabId}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <Div isDark={isDark}>
      <div className='menu-box'>
        <Scrollspy items={MENU.map(i => `anchor--${i.id}`)} currentClassName="current" className='menu'>
          {MENU.map(item => (
            <div
              className='menu--item'
              onClick={() => handleClickTab(item.id)}
            >
              {item.label}
            </div>
          ))}
        </Scrollspy>
      </div>
      <div className='right-box'>
        {MENU.map(item => (
          <StyledWrapper>
            <div className='title' id={`anchor--${item.id}`}>
              {item.label}
            </div>
            <div className='content'>
              {R.has('imgName')(item) &&
                <div className='img-box'>
                  {item.imgName.map(img => <img src={img} alt="" />)}
                </div>
              }
              {R.has('videoName')(item) &&
                <div className='img-box'>
                  {item.videoName.map(video => (
                    <ReactPlayer
                      url={video}
                      width={item.videoSize}
                      height="auto"
                      controls={true}
                    />))}
                </div>
              }
              <div className='desc'>
                <div className='desc--year'>{item.year}</div>
                {
                  item.desc.map(d => (
                    <div className='desc--box'>
                      <div className='desc--box--title'>
                        {d.title}
                      </div>
                      <div className='desc--box--content'>
                        {d.content}
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
          </StyledWrapper>
        ))}
      </div>
    </Div>
  );
};

const mapStateToProps = (state) => ({
  isDark: state.common.isDark,
});

const mapDispatchToProps = {
};

export default compose(connect(mapStateToProps, mapDispatchToProps))(DailyPractice);
