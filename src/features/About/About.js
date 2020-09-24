import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import * as Mixins from '../../styles/_mixins';
import { COLORS, FONT_FAMILY, FONT_SIZE, RWD_SIZE } from '../../styles/_variables';
import { DATA } from './Consts';
import FileSaver from 'file-saver';


const Div = styled.div`
  ${props => Mixins.bgBase(props.isDark)};
  min-height: 90vh;
  padding: 0rem 18% 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: 1px;
  img{
    width: 100%
  }
  .wrapper{
    width: 90%;
    height: 26rem;
    background: ${COLORS.LIGHT_GRAY};
    display: flex;
    justify-content: space-between;
    position: relative;
  }

  .left{
    display: flex;
    flex-direction: column;
    width: 45%;
    margin: 3rem 0 0;
    align-items: flex-start;
    &--title{
      margin: 0 0 2rem -2.5rem ;
      font-family: ${FONT_FAMILY.PROJECT_NAME};
      letter-spacing: 3px;
      font-size: 2.5rem;
      font-weight: 600;
    }
    &--content{
      margin: 0 0 2.5rem 2rem;
      white-space: pre-line;
      font-family: ${FONT_FAMILY.PROJECT_NAME};
      line-height: 1.5rem;
    }
    &--line{
      display: none;
    }
  }

  .right{
    width: 45%;
    align-self: center;
    margin: 0 1.5rem 0 0;
  }

  .resume-btn{
    letter-spacing: 1.5px;
    margin: 1.2rem 0 0 2rem;
    font-size: ${FONT_SIZE.MOB.BASE};
    background: ${COLORS.GRAY};
    color: ${props => props.isDark ? COLORS.BLACK : COLORS.WHITE};
    padding: 0.6rem 0.8rem;
    cursor: pointer;
    position: relative;
    .line{
      border: 1px solid;
      border-color: ${props => props.isDark ? COLORS.WHITE : COLORS.BLACK}; 
      position: absolute;
      width: 100%;
      height: 115%;
      top: -8px;
      left: -6px;
      opacity: 0;
    }
    &:hover{
      .line{
        opacity: 0.8;
        transition: .6s ease all;
      }
    }
  }


  @media ${RWD_SIZE.S} {
    min-height: 100vh;
    align-items: unset;
    padding: 20% 12% 3rem;
    .wrapper{
      width: 100%;
    }
  }

  @media (max-width: 769px) {
    align-items: unset;
    padding: 12% 10% 3rem;
    .wrapper{
      width: 100%;
      height: 55rem;
      flex-direction: column;
      align-items: center;
      letter-spacing: 2px;
    }
    .left{
      align-items: center;
      width: 55%;
      &--title{
        margin: -4.6rem 0 4rem 0rem;
        font-weight: 700;
      }
      &--content{
        text-align: center;
        margin: 0 0 2rem;
        line-height: 2rem;
        width: 100%;
      }
      &--line{
        display: unset;
        margin: 0 0 1.5rem;
        width: 1.8rem;
        height: 3px;
        background: ${props => props.isDark ? COLORS.WHITE : COLORS.BLACK};
      }
    }
    .right{
      width: 50%;
      margin: 5rem 0 0;
    }
    .resume-btn{
      margin: 1.5rem 0 0;
    }
  }

  @media ${RWD_SIZE.XS} {
    padding: 15% 10% 3rem;
    min-height: 100vh;
    .wrapper{
      height: 50rem;
    }
    .left{
      align-items: center;
      width: 88%;
      &--title{
        margin: -4.4rem 0 3rem 0rem;
        font-weight: 700;
        font-size: 2.2rem;
      }
      &--content{
        margin: 0 0 1.5rem;
        letter-spacing: 1.2px;
      }
      &--line{
        display: unset;
        margin: 0 0 3.5rem;
      }
    }
    .right{
      width: 80%;
      margin: 4rem 0 0;
    }
  }
`;


const About = (props) => {
  const { isDark } = props;

  function handleDownloadCV(ver) {
    if (ver === 'en') {
      window.open(DATA.CV_EN)
    } else {
      window.open(DATA.CV_MANDARIN)
    }
    // FileSaver.saveAs(
    //   DATA.CV_EN,
    //   'jin_chiu_cv_en'
    // );
  }

  // console.log('HOME props', props);
  return (
    <Div isDark={isDark}>
      <div className='wrapper'>
        <div className='left'>
          <div className='left--title'>
            ABOUT ME
          </div>
          <div className='left--line' />
          <div className='left--content'>
            {DATA.INTRO}
          </div>
          <div
            className='resume-btn'
            onClick={() => handleDownloadCV('en')}
          >
            View my resume (English)
            <div className='line' />
          </div>
          <div
            className='resume-btn'
            onClick={() => handleDownloadCV('mandarin')}
          >
            View my resume (Mandarin)
            <div className='line' />
          </div>
        </div>
        <div className='right'>
          <img src={DATA.ME} alt="" />
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

export default compose(connect(mapStateToProps, mapDispatchToProps))(About);
