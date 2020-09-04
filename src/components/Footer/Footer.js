import React from 'react';
import styled from 'styled-components';
import { FOOTER_BUTTONS } from './FooterConsts';
import IconInstagram from './IconInstagram.svg';
import IconFacebook from './IconFacebook.svg';

const StyledFooter = styled.footer`
  letter-spacing: 2px;
  background: linear-gradient(135deg, rgb(195, 12, 12, 1), rgb(10, 74, 154, 1));
  font-size: 0.8rem;
  z-index: 2;
  position: relative;

  .upper-box {
    width: 100%;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.5rem 0rem;

    .button-group {
      display: flex;
      margin: 0 1rem;
      .link-btn {
        margin: 0 0.8rem;
        color: rgba(255, 255, 255, 0.8);
        opacity: 0.8;
        &:hover {
          cursor: pointer;
          opacity: 1;
        }
      }
    }
    .icon-group {
      img {
        width: 2.5rem;
        margin: 0 0.4rem;
        opacity: 0.8;
        &:hover {
          cursor: pointer;
          opacity: 1;
        }
      }
    }
  }
  .bottom-box {
    width: 100%;
    height: 25%;
    background: rgba(0, 0, 0, 0.8);
    color: rgba(255, 255, 255, 0.65);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.8rem 0;
    .copyright-btn {
      display: block;
      margin: 0 0.5rem;
      color: #ffffff;
    }
  }

  @media (max-width: 500px) {
    .upper-box {
      flex-direction: column;
      .button-group {
        flex-direction: column;
        .link-btn {
          display: block;
          margin: 0.5rem 0;
        }
      }
      .icon-group {
        display: flex;
        flex-direction: column;
        img {
          width: 2rem;
          margin: 0.5rem 0;
        }
      }
    }
  }
`;

const Footer = (props) => {
  function handleWindowOpen(url) {
    return window.open(url);
  }

  return (
    <StyledFooter>
      <div className="upper-box">
        {/* 這邊是關於我們的那幾頁 */}
        <div className="button-group">
          {FOOTER_BUTTONS.map((btn) => (
            <a className="link-btn" href={btn.url}>
              {btn.buttonName}
            </a>
          ))}
        </div>
        {/* 這邊是社群Icon們*/}
        <div className="icon-group">
          <img src={IconFacebook} alt="" onClick={() => handleWindowOpen(process.env.REACT_APP_FACEBOOK_URL)} />
          <img src={IconInstagram} alt="" onClick={() => handleWindowOpen(process.env.REACT_APP_INSTAGRAM_URL)} />
        </div>
      </div>
      <div className="bottom-box">
        © 2020 Copyright:
        <a className="copyright-btn" href="https://www.rebas.tw/">
          Rebas 野球革命
        </a>
      </div>
    </StyledFooter>
  );
};

Footer.defaultProps = {};

export default Footer;
