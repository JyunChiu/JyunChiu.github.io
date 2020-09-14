import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FaEnvelope, FaLinkedinIn } from "react-icons/fa";
import { COLORS } from '../../styles/_variables';

const Div = styled.div`
  display: flex;
  flex-direction: ${props => props.direction};

  >a{
    display: block;
    margin: 0.5rem;

    &:hover{
      transform: translateX(5px);
      transition: .5s ease all;
    }
  }
`
const SocialBox = (props) => {
  const {
    isDark,
    direction,
    isMenu,
  } = props;

  const [color, setColor] = useState(COLORS.WHITE);

  useEffect(() => {
    let result;
    if (isMenu) {
      result = isDark ? COLORS.BLACK : COLORS.WHITE;
    }
    else {
      result = isDark ? COLORS.WHITE : COLORS.BLACK;
    }
    setColor(result);

  }, [isDark, isMenu])

  const extendProps = {
    size: 18,
    style: { fill: color }
  }

  return (
    <Div isDark={isDark} direction={direction}>
      <a href="mailto:jyunc1512@gmail.com">
        <FaEnvelope {...extendProps} />
      </a>

      <a href="http://linkedin.com/in/jin-chiu-a165ab142">
        <FaLinkedinIn {...extendProps} />
      </a>
    </Div >
  );
}

SocialBox.defaultProps = {
  isMenu: false,
  direction: 'row',
}


export default SocialBox;