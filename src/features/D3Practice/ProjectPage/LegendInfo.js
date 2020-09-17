import React from 'react';
import * as d3 from "d3";
import styled from 'styled-components';
import TimeIcon from '../../../Icon/time.svg'

const Div = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 0rem;
  letter-spacing: 1px;
  font-size: 0.8rem;
  width: 70%;
  overflow: auto;
  position: relative;
  .box {
    display: flex;
    margin: 0.5rem 0rem;
    align-items: center;
    .time-icon {
      width: 1.2rem;
    }
    .text {
      margin-left: 0.6rem ;
      color: #FFF;
    }
    .y-value{
      margin: 0rem 0.6rem ;
      color: #FFF;
      white-space: nowrap;
    }
  }
`;

const Legend = styled.div`
  width: ${({ legendSize }) => legendSize};
  height: ${({ legendSize }) => legendSize};
  background-color: ${({ color, defaultColor }) => !!color ? color : defaultColor};
  border-radius: ${({ round }) => round ? '10rem' : '3px'};
`;

const LegendInfo = (props) => {
  const {
    data,
    focusValue,
    colors,
    xUnit,
    yUnit,
    defaultColor,
    legendSize,
    findMinAndMax,
    width, height, margin
  } = props;

  function getYValue(i, val) {
    let xDomain = findMinAndMax('sec', data.map(d => d.grade));
    let xScale = d3.scaleLinear()
      .domain(xDomain)
      .range([margin.left, width - margin.right]);
    const xId = xScale(val);

    let yDomain = findMinAndMax('meter', data.map(d => d.grade));
    let yScale = d3.scaleLinear()
      .domain(yDomain)
      .range([height - margin.bottom, margin.top]);
    const mainLines = document.getElementsByClassName('main-line');
    let beginning = 0;
    let end = mainLines[i].getTotalLength();
    let obj = null;

    while (true) {
      let target = Math.floor((beginning + end) / 2);
      obj = mainLines[i].getPointAtLength(target);
      if ((target === end || target === beginning) && obj.x !== xId) {
        break;
      }
      if (obj.x > xId) {
        end = target
      }
      else if (obj.x < xId) {
        beginning = target
      }
      else break; //position found
    }

    const result = yScale.invert(obj.y).toFixed(0);

    return result;
  }

  return (
    <Div legendSize={legendSize}>
      <div className="box">
        <img src={TimeIcon} className="time-icon" alt="" />
        {focusValue || focusValue === 0 ? <div className="text"> {focusValue} {xUnit} </div> : null}
      </div>
      {
        data && data.map((d, i) => {
          const yValue = focusValue || focusValue === 0 ? getYValue(i, focusValue) : null;
          const legendColor = colors[i]
          return (
            <div className="box">
              <Legend
                round
                color={legendColor}
                defaultColor={defaultColor}
                legendSize={legendSize}
              />
              <div className="text"> {d.name} </div>
              {yValue || yValue === 0 ? <div className="y-value"> {yValue} {yUnit} </div> : <div />}
            </div>)
        })
      }
    </Div>
  );
};

LegendInfo.defaultProps = {
  data: null,
  focusValue: '',
  colors: [],
  xUnit: '',
  yUnit: '',
  defaultColor: '#FFF',
  legendSize: '1.1rem',
  round: false,
}


export default LegendInfo;