import React, { useEffect, useRef, Fragment } from 'react';
import styled from 'styled-components';
import * as d3 from "d3";

const Div = styled.div`

`;

const Slice = (props) => {
  const { value, fill, outerRadius, innerRadius = 0 } = props;
  
  useEffect(() => {
    const svg = d3.select(svgRef.current);
    let arc = d3.svg.arc()
      .innerRadius(innerRadius)
      .outerRadius(outerRadius); 

  }, [])

  console.log('PiePage ====', props)

  return (
    <Fragment>
       <path d = {arc(value)} fill={fill} />
    </Fragment>
  );
};

export default Slice;