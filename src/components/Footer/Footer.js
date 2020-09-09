import React from 'react';
import styled from 'styled-components';
import { COLORS, FONT_FAMILY } from '../../styles/_variables';
import { FOOTER_BUTTONS } from './FooterConsts';

const StyledFooter = styled.footer`
  display: flex;
  background: ${props => props.isDark ? COLORS.BLACK : COLORS.WHITE};
  /* background: ${props => props.isDark ? '#2f2f2f' : '#FFFFFF'}; */
  color: ${props => props.isDark ? COLORS.WHITE : COLORS.BLACK};
  justify-content: center;
  letter-spacing: 3px;
  font-size: 12px;
  padding: 1rem 0;
  
  >div{
    transform: scale(0.8);
  }
  @media (max-width: 500px) {
    >div{
    transform: scale(0.7);
  }
  }
`;

const Footer = (props) => {
  const { isDark } = props

  return (
    <StyledFooter isDark={isDark}>
      <div>
        © Designed And Coded By JIN CHIU  2020
      </div>
    </StyledFooter >
  );
};

Footer.defaultProps = {};

export default Footer;
