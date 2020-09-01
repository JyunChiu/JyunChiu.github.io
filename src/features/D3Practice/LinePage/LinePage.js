import React, { useEffect, useRef, Fragment } from 'react';
import * as d3 from "d3";

const LinePage = (props) => {
  const { data, width, height, margin} = props;
  const svgRef = useRef(null);

  useEffect(() => {
    if(!data) return;
    const svg = d3.select(svgRef.current);

    /* Gen Axis Start-------------------------------*/
    // X軸
    const xDomain = data.map( d => d.date);
    let xScale = d3.scaleLinear()
        .domain(d3.extent(xDomain))
        .range([margin.left, width - margin.right]);
  
    const xAxis = d3.axisBottom()
          .scale(xScale)
          .tickFormat(d3.timeFormat('%B %d'))
          .tickSize(0)
          .tickPadding(12);

    svg
      .select('.x-axis')
      .call(xAxis)

    // Y軸
    const max = d3.max(data, d => d.max);
    const min = d3.min(data, d => d.min);
    let yScale = d3.scaleLinear()
        .domain([min,max+10])
        .range([height - margin.bottom, margin.bottom]);

    const yAxis = d3.axisLeft()
          .scale(yScale)
          .tickSize(0)
          .ticks(5);

    svg
      .select('.y-axis')
      .call(yAxis)


    /* Gen Line Start-------------------------------*/
    const theLine = d3.line()
      .x(d => xScale(d.date))
      .y(d => yScale(d.max))
      .curve(d3.curveCardinal)
    
    svg
    .selectAll(".line")
    .data([data])
    .join("path")
    .transition()
    .duration(500)
    .attr("d", theLine)
    .attr('class', 'line')
    .attr("fill", "none")
    .attr("stroke", "#ffff")
     /* Gen Line End-------------------------------*/

    //  console.log(':::::::::::', data)

    },[data, svgRef.current])

  return (
    <Fragment>
     <svg
      ref={svgRef}
      width={width}
      height={height}
     >
        <g className="x-axis" transform={`translate(0, ${height - margin.bottom})`}/>
        <g className="y-axis" transform={`translate(${margin.left}, 0)`}/>
     </svg>
    </Fragment>
  );
};

export default LinePage;