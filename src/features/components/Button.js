import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  cursor: pointer;
  margin: 0.5rem;
  background: ${({background})=>background};
  color: ${({color})=>color};
  padding: 0.6rem 0.5rem;
  border-radius: 5px;
  letter-spacing: 1px;
  font-size: 0.8rem;
  font-weight: 500;
  text-align: center;

  &:hover{
    box-shadow: 0px 0px 15px 0px rgba(255,255,255,0.6);
  } 
  &.disabled{
    opacity: 0.5;
    cursor: not-allowed;
    &:hover{
      box-shadow: none;
    }
  }

`;

const Button = (props) => {
  const { onClick, disabled, children } = props;
  return (
    <Div
      {...props}
      className={disabled ? "disabled": ""}  
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </Div>
  );
};

Button.defaultProps = {
  onClick: () => {},
  disabled: false,
  color: "#233e58",
  background: "rgba(255, 255, 255, 0.8)",
  children: ''
}

export default Button;