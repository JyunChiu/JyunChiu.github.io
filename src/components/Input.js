import React from 'react';
import styled from 'styled-components';
import ErrorIcon from '../Icon/error.svg';

const Div = styled.div`
  margin: 0.6rem 0rem;
  letter-spacing: 1px;
  font-size: 0.8rem;
  font-weight: 500;
  .input-label{
    margin-bottom: 0.8rem ;
    color: rgba(255, 255, 255, 1);
  }
  input{
    background: rgba(255, 255, 255, 0.6);
    border: 2px solid transparent;
    border-color: ${({isError}) => isError? '#b52e2e': 'transparent'};
    outline: none;
    padding: 0.5rem;
    border-radius: 5px;
    box-shadow: none;
    width: 6rem;

    &:focus{
      box-shadow: none;
      border-color: ${({isError}) => isError? '#b52e2e': '#62c9d5'};
    }
  }
`;

const ErrorMsg = styled.div`
  display: flex;
  margin-top: 0.5rem;
 .error-icon{
    width: 1rem;
    margin-right: 0.5rem;
  }
  .error-text{
    color: #b52e2e;
  }
`;

const Input = (props) => {
  const { value, onChange, label, errMsg, isError, ...restProps } = props;
  function handleOnChange(e){
    const val = e.target.value;
    onChange(val);
  }

  return (
    <Div isError={isError} >
      <div className="input-label"> {label} </div>
      <input
        value={value}
        onChange={e => handleOnChange(e)}
        {...restProps}
      />
      {isError? 
        <ErrorMsg>
        <img src={ErrorIcon} className="error-icon" alt=""/>
        <div className="error-text"> 
          {errMsg} 
        </div> 
        </ErrorMsg>
        : null}
    </Div>
  );
};

Input.defaultProps = {
  placeholder: '',
  onChange: () => {},
  disabled: false,
  isError: false,
  label: null,
  errMsg: null
}

export default Input;