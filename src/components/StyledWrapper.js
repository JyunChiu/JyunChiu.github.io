import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  /* border: 1px solid #1d1d1d; */
`

const StyledWrapper = (props) => {
  return (
    <Div {...props}>
      {props.children}
    </Div>
  );
};

StyledWrapper.defaultProps = {
  color: "#dddddd",
  background: "rgba(255, 255, 255, 0.8)",
  children: ''
}

export default StyledWrapper;