import React, { useEffect, useRef, Fragment } from 'react';
import styled from 'styled-components';
import * as d3 from "d3";
// import Slice from './Slice';

const Div = styled.div`

`;

const PiePage = (props) => {
  const { data, width, height, innerRadius, outerRadius } = props;
  const myColor = ['#996464', '#8a9368', '#687d93', '#93688a', '#7f705e', '#3b4668'];
  const svgRef = useRef(null);
  const format = d3.format(",.0f");

  const createPie = d3
    .pie()
    .value(d => d.max)
    .sort(null);
  
  const createArc = d3
    .arc()
    .innerRadius(innerRadius)
    .outerRadius(() => d3.select('.arc').classed('clicked')? outerRadius * 1.15 : outerRadius)
    .cornerRadius(7)
    .padAngle(0.02);
  
  const labelArc = d3.arc()
    .outerRadius(outerRadius)
    .innerRadius(innerRadius);
  
  useEffect(() => {
    if(!data) return;
    const svg = d3.select(svgRef.current);
    const svgWithData = svg.selectAll("g.arc").data(createPie(data));
    const svgWithUpdate = svgWithData.enter().append("g").attr("class", 'arc');

    const path = svgWithUpdate
    .append("path")
    .merge(svgWithData.select("path.arc"))
    .on('mouseover', function(d, i, j){
      pathAnim(d3.select(this), 1);
      
      let paths = svg.selectAll('path.arc').data();
      const this_path_value = paths[i].value;
      const total_value = d3.sum(paths, p => p.value);
      svg
      .select('.value')
      .text(format(this_path_value));
      svg
      .select('.percentage')
      .text((this_path_value / total_value * 100).toFixed(2) + '%')
    })
    .on('mouseout', function(d, i){
      const thisPath = d3.select(this);
      if (!thisPath.classed('clicked')) {
          pathAnim(thisPath, 0);
      }

      setCenterText(svg);
    })
    .on('click', function(d, i, j){
      const thisPath = d3.select(this);
      const clicked = thisPath.classed('clicked');
      pathAnim(thisPath, ~~(!clicked));
      thisPath.classed('clicked', !clicked);

      setCenterText(svg);
  })
    ;

    path
    .attr("class", 'arc')
    .merge(svg)
    .transition()
    .duration(500)
    .attr("d", createArc)
    .attr("fill", (d, i) => myColor[i]? myColor[i] : "#383838");

    svgWithData.exit().remove();

    const text = svgWithUpdate
    .append("text")
    .merge(svgWithData.select("text"));

    text
    .attr("text-anchor", "middle")
    .attr("alignment-baseline", "middle")
    .attr("transform", d => `translate(${labelArc.centroid(d)})`)
    .style("fill", "white")
    .style("font-size", "0.8rem")
    .style('letter-spacing', 1)
    .text(d => format(d.value));

    /* Center Start---------------------------------------------------- */
    const center_r = innerRadius * 0.85;
    svg
    .append("circle")
    .attr("class", "center")
    .attr("r", center_r)
    .style("fill", "rgba(255, 255, 255, 0.6)")
    .on('mouseover', (d, i) => {
      d3
      .select('.center')
      .transition()
      .attr("r", center_r * 1.1);
    })
    .on('mouseout', (d, i) => {
      d3
      .select('.center')
      .transition()
      .duration(500)
      .ease(d3.easeBounce)
      .attr("r", center_r);
    })
    .on('click', function(d, i){
      var paths = svg.selectAll('.clicked');
      pathAnim(paths, 0);
      paths.classed('clicked', false);
      resetAllCenterText(svg);
    });

    svg
    .append('text')
    .attr('class', 'center-txt title')
    .attr('y',  center_r * - 0.35)
    .attr('text-anchor', 'middle')
    .style('font-weight', 'bold')
    .style('letter-spacing', 2)
    .text('Total');

    svg
    .append('text')
    .attr('class', 'center-txt value')
    .attr('text-anchor', 'middle')
    .attr('y', center_r * 0.1)
    .style('letter-spacing', 2)
    .text(format(d3.sum(svg.selectAll('path.arc').data(), d => d.value)));

    svg
    .append('text')
    .attr('class', 'center-txt percentage')
    .attr('y', center_r * 0.55)
    .attr('text-anchor', 'middle')
    .style('letter-spacing', 2)
    .style('fill', '#767676');

    /* Center End---------------------------------------------------- */

    return () => {
      svg.selectAll(".center").remove()
      svg.selectAll('.center-txt').remove()
    };
  
  }, [JSON.stringify(data)])


  function pathAnim (aim, dir) {
    switch(dir) {
      case 0:
        aim
        .transition()
        .duration(500)
        .ease(d3.easeBounce)
        .attr('d', d3
          .arc()
          .innerRadius(innerRadius)
          .outerRadius(outerRadius)
          .cornerRadius(7)
          .padAngle(0.02)
        );
      break;

      case 1:
        aim
        .transition()
        .attr('d', d3
          .arc()
          .innerRadius(innerRadius)
          .outerRadius(outerRadius * 1.15)
          .cornerRadius(7)
          .padAngle(0.02)
        );
      break;
    }
  }

  function setCenterText(thisDonut) {
    let paths = thisDonut.selectAll('path.arc').data();
    const total_value = d3.sum(paths, p => p.value);
    let sum = d3.sum(thisDonut.selectAll('.clicked').data(), d => d.value);

    thisDonut
    .select('.value')
    .text(d => sum ? format(sum) : format(total_value));
    thisDonut
    .select('.percentage')
    .text(d => sum ? (sum / total_value * 100).toFixed(2) + '%' : '');
  }

  function resetAllCenterText (thisDonut) {
    thisDonut
    .selectAll('.value')
    .text(format(d3.sum(thisDonut.selectAll('path').data(), d => d.value)));
    thisDonut
    .selectAll('.percentage')
    .text('');
}


  return (
    <Fragment>
      <svg
        width={width}
        height={height}
      >
      <g
        clsaaName= "donut"
        ref={svgRef}
        transform={`translate(${width/2} ${height/2})`}
      />
    </svg>
    </Fragment>
  );
};

export default PiePage;