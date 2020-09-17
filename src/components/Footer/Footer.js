import React from 'react';
import styled from 'styled-components';
import { COLORS, RWD_SIZE } from '../../styles/_variables';
import { FOOTER_BUTTONS } from './FooterConsts';

const StyledFooter = styled.footer`
  display: flex;
  background: ${props => props.isDark ? '#2f2f2f' : '#f9f9f9'};
  color: ${props => props.isDark ? COLORS.WHITE : COLORS.BLACK};
  justify-content: center;
  letter-spacing: 3px;
  font-size: 12px;
  padding: 1rem 0 2rem;
  
  >div{
    transform: scale(0.8);
  }
  @media ${RWD_SIZE.XS} {
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
