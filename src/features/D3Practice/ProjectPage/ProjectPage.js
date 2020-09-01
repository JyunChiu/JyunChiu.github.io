import React, { useEffect, useRef, Fragment, useState } from 'react';
import styled from 'styled-components';
import * as d3 from "d3";
import _maxBy from 'lodash/maxBy';
import _minBy from 'lodash/minBy';
import _map from 'lodash/map';
import { getRandomRaceResult } from '../../MainPage/Const';
import Input from '../../components/Input';
import LegendInfo from './LegendInfo';

const Div = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  left: 2%;
  top: 18%;
  flex-direction: column;
  width: 20%;
`;

const ProjectPage = (props) => {
  const { width, height, margin } = props;
  const [data, setData] = useState(null);
  const [selectedSec, setSelectedSec] = useState(null);
  const [inputVal, setInputVal] = useState('');
  const [isError, setIsError] = useState(false);
  const [errMsg, setErrMsg] = useState(null);
  const [currentZoomState, setCurrentZoomState] = useState(null);
  const svgRef = useRef();
  const svg = d3.select(svgRef.current);
  const svgContent = svg.select(".content");
  // 顏色處理
  const myColor = ['#f89c9c', '#51b2a1', '#dbc87f', '#de8eec'];


  useEffect(() => {
    const fakeName = ['Chole', 'Jay']
    const newData = fakeName.map(item=>{
      return{
        name: item,
        grade: getRandomRaceResult()
      }
    })
    setData(newData);
  }, [])

  useEffect(() => {
    if(!data) return;

    /* Gen Axis Start-------------------------------*/
    // X軸
    let xDomain = findMinAndMax('sec', data.map(d=> d.grade));
    let xScale = d3.scaleLinear()
        .domain(xDomain)
        .range([margin.left, width-margin.right]);

    if (currentZoomState) {
      const newXScale = currentZoomState.rescaleX(xScale);
      xScale
      .domain(newXScale.domain());
    }
  
    const xAxis = d3.axisBottom()
          .scale(xScale)
          .tickSize(0)
          .tickPadding(12)

    svg
    .select('.x-axis')
    .call(xAxis)

    // x軸 label
    svg
    .selectAll(".axis-label--x")
    .data([0])
    .join("text")
    .attr('class', 'axis-label--x')
    .attr("x", width - 40 )
    .attr("y", height - margin.bottom + 5 )
    .text("(Sec.)");   

    // Y軸
    let yDomain = findMinAndMax('meter', data.map(d=> d.grade));
    let yScale = d3.scaleLinear()
        .domain(yDomain)
        .range([height - margin.bottom, margin.top]);

    const yAxis = d3.axisLeft()
          .scale(yScale)
          .tickSize(0)
          .ticks(5)
          .tickPadding(12);

    svg
    .select('.y-axis')
    .call(yAxis)

    // y軸 label
    svg
    .selectAll(".axis-label--y")
    .data([0])
    .join("text")
    .attr('class', 'axis-label--y')
    .attr("x", margin.left )
    .attr("y", margin.top - 20 )
    .text("(M)");    
    /* Gen Axis End---------------------------------------*/ 

    /* Gen Line Start-------------------------------------*/
    const theLine = d3.line()
      .x(d => xScale(d.sec))
      .y(d => yScale(d.meter))
      .curve(d3.curveCardinal)
      
    svgContent
    .selectAll(".main-line")
    .data(data)
    .join("path")
    .attr('class', 'main-line')
    // .transition()
    .attr("d", d => theLine(d.grade))
    .attr("fill", "none")
    .attr("stroke", (d,i) => myColor[i]? myColor[i] : '#ffffffb3')
    .attr("stroke-width", 3)
    /* Gen Line End---------------------------------------*/

    // dot
    svgContent
    .selectAll('circle-group')
    .data(data)
    .enter()
      .selectAll('.dot')
      .data(d => d.grade)
      .join('circle')
      .attr('class', 'dot')
      .attr('cx', d => xScale(d.sec))
      .attr('cy', d => yScale(d.meter))
      .attr('r', 2.5)
    
    /* Focus Line -----------------------------------------*/
    svg
    .selectAll('rect')
    .data([0])
    .join('rect')
    .attr('x', 0)
    .attr('y', margin.top)
    .attr('width', width)
    .attr('height', height - margin.bottom - margin.top)
    .attr('fill', 'none')
    .attr('stroke', 'none')
    .attr('pointer-events', 'all')
    .on('mousemove', () => {
      const x = d3.mouse(svg.node())[0];
      let focusSec = xScale.invert(x).toFixed(0);
      handleOnMouseMove(focusSec);
    });
    /* Focus End -----------------------------------------*/

    // zoom
    const zoomBehavior = d3.zoom()
      .scaleExtent([0.5, 2])
      .translateExtent([
        [margin.left,  margin.top],
        [width-margin.right, height - margin.bottom]
      ])
      .extent([
        [margin.left,  margin.top],
        [width-margin.right, height - margin.bottom]
      ])
      .on("zoom", () => {
        const zoomState = d3.zoomTransform(svg.node());
        setCurrentZoomState(zoomState);

      });
      
      svg.call(zoomBehavior);


    },[JSON.stringify(data), currentZoomState])

  useEffect(() => {
    if(!data) return;

    // focus的線
    let xDomain = findMinAndMax('sec', data.map(d=> d.grade));
    let xScale = d3.scaleLinear()
        .domain(xDomain)
        .range([margin.left, width-margin.right]);
    svgContent
    .selectAll('.selected-sec-line')
    .data([0])
    .join('line')
    .attr('class', 'selected-sec-line')
    .attr('x1', xScale(selectedSec))
    .attr('x2', xScale(selectedSec))
    .attr('y1', margin.top)
    .attr('y2', height - margin.bottom)
    .style('stroke', '#FFF')
    .style("stroke-width", 0.4)
    .style("stroke-dasharray", (5,5));

  }, [selectedSec])

    function findMinAndMax(key, items){
      const resultOfMax = _maxBy(_map(items, i => _maxBy(i, key)), key);
      const resultOfMin = _minBy(_map(items, i => _minBy(i, key)), key)

      return [resultOfMin[key], resultOfMax[key]];
    }

    function handleOnMouseMove(focusSec){
      let xDomain = findMinAndMax('sec', data.map(d=> d.grade));
      if(focusSec <= xDomain[0] ){
        focusSec = xDomain[0];
      }
      if(focusSec >= xDomain[1]){
        focusSec = xDomain[1];
      }
      setIsError(false);
      setErrMsg(null);
      setInputVal('');
      setSelectedSec(focusSec);
    }

    function handleInput(val){
      setInputVal(val);
      let xDomain = findMinAndMax('sec', data.map(d=> d.grade));
      // 判斷是否純數字
      var reg=/^[1-9]\d*$|^0$/;
      if(val < xDomain[0] ){
        val = xDomain[0];
        setIsError(true);
        setErrMsg('已小於最低秒數')
      }
      if(val > xDomain[1]){
        val = xDomain[1];
        setIsError(true);
        setErrMsg('已大於最高秒數')
      }
      if(!reg.test(val) && val!==''){
        val = xDomain[0]
        setErrMsg('請輸入整數');
        setIsError(true);
      }
      if(val===null || val===''){
        val = xDomain[0];
        setIsError(false);
        setErrMsg(null);
      }
      setSelectedSec(val);
    }

  return (
    <Fragment>
      <Div>
        <Input
          label="請輸入秒數"
          isError={isError}
          onChange={val => handleInput(val)} 
          errMsg={errMsg}
          value={inputVal}
        />
        <LegendInfo
          svg={svg}
          data={data}
          focusValue={selectedSec}
          xUnit="sec"
          yUnit="m"
          colors={myColor}
          findMinAndMax={findMinAndMax}
          width={width}
          height={height}
          margin={margin}
        />
     </Div>
     <svg
      ref={svgRef}
      width={width}
      height={height}
     >
        <g className="content" />
        <g className="x-axis" transform={`translate(0, ${height - margin.bottom})`}/>
        <g className="y-axis" transform={`translate(${margin.left}, 0)`}/>
     </svg>
    </Fragment>
  );
};

export default ProjectPage;