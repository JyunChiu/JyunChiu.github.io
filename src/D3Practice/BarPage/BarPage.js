import React, { useEffect, useRef, Fragment } from 'react';
import * as d3 from "d3";


const BarPage = (props) => {
  const { data, width, height, margin} = props;
  const svgRef = useRef(null);

  useEffect(() => {
    if(!data) return;
    const svg = d3.select(svgRef.current);

    /* Gen Axis Start-------------------------------*/
    // X軸
    const xDomain = data.map( d => d.date);
    let xScale = d3.scaleBand()
        .domain(xDomain)
        .range([margin.left, width - margin.right])
        .padding(0.4)
  
    const xAxis = d3.axisBottom()
          .scale(xScale)
          .tickFormat(d3.timeFormat('%B %d'))
          .tickSize(0)
          .tickPadding(12);

    svg
      .select('.x-axis')
      .call(xAxis);

    // Y軸
    const max = d3.max(data, d => d.max); 
    const min = d3.min(data, d => d.min);
    let yScale = d3.scaleLinear()
        .domain([min,max])
        .range([height - margin.bottom, margin.bottom]);

    const yAxis = d3.axisLeft()
          .scale(yScale)
          .tickSize(0)
          .ticks(5);

    // 變色處理
    let colorScale = d3.scaleLinear()
        .domain([20, 60, 90])
        .range(["#6f3535", "#ffffffcf", "#415c42"])
        .clamp(true);

    svg
      .select('.y-axis')
      .call(yAxis);

    
    /* Gen Bar Start-------------------------------*/
    svg
    .selectAll(".bar")
    .data(data)
    .join("rect")
    .attr('class', 'bar')
    .style('transform', 'scale(1, -1)')
    .attr('x', d => xScale(d.date))
    .attr('y', -(height - margin.bottom))
    .attr('width', xScale.bandwidth())
    .on("mouseenter",d => {
      svg
        .selectAll(".tooltip")
        .data([d.max])
        .join(enter => enter.append("text").attr("y", yScale(d.max) - 4))
        .attr("class", "tooltip")
        .text(d.max)
        .attr("x", xScale(d.date) + (xScale.bandwidth()/2))
        .attr("text-anchor", "middle")
        .transition()
        .attr("y", yScale(d.max) - 8)
        .attr("fill", "#ffffffcf")
        .attr("opacity", 1)
    })
    .on("mouseleave", () => {
      svg
      .select(".tooltip")
      .remove()
    })
    .transition()
    .duration(500)
    .attr("fill", d => colorScale(d.max))
    .attr('height', d => height - margin.bottom - yScale(d.max));
     /* Gen Line End-------------------------------*/

    },[data, svgRef.current])

    // console.log('Project ::::::', data );
    
  return (
    <Fragment>
     <svg
      ref={svgRef}
      width={width}
      height={height}
     >
        <g className="x-axis" transform={`translate(0, ${height - margin.bottom})`} />
        <g className="y-axis" transform={`translate(${margin.left}, 0)`} />
     </svg>
    </Fragment>
  );
};

export default BarPage;