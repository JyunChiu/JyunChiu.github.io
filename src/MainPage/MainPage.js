import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PiePage from '../D3Practice/PiePage';
import BarPage from '../D3Practice/BarPage';
import LinePage from '../D3Practice/LinePage';
import ProjectPage from '../D3Practice/ProjectPage';
import { DATA_TYPE_NAME, SVG_CONTAINER_SIZE, getRandomDate, getRandomNum } from './Const';
import Button from '../components/Button';

const Div = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(50deg, #48284c 0%, #233e58 100%);
  /* background: linear-gradient(100deg, rgb(182, 40, 111) 50%, #ac2066 0); */
  padding: 5rem 0rem;
  position: relative;

  /* upper bar -------------------------------------------------- */
  .upper-bar {
    display: flex;
    align-items: center;
    .button {
      cursor: pointer;
      margin: 0 1rem;
      padding: 0.5rem 0rem;
      font-size: 1.2rem;
      color: rgba(255, 255, 255, 1);
      letter-spacing: 2px;
      text-align: center;
      &.--active {
        border-bottom: solid 4px rgb(152, 136, 40, 1);
      }

      &:hover{
        color: rgba(255, 255, 255, 0.6);
        border-bottom: solid 4px rgb(152, 136, 40, 0.3);
      }
    }
  }

  /* content box -------------------------------------------------- */
  .content-box {
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 5px;
    padding: 1rem;
    margin: 2rem 0rem;
    /* position: relative; */
    .x-axis , .y-axis {
      color: rgba(255, 255, 255, 0.9);
      letter-spacing: 1px;
      & path{
        stroke: rgba(255, 255, 255, 0.4);
      }
    }
    .axis-label--x, .axis-label--y{
      fill: rgba(255, 255, 255, 0.6);
      letter-spacing: 1px;
      text-anchor: middle;
      font-size: 0.8rem;
    }
    .dot{
      fill: transparent; 
      stroke: #FFF;
    }
  }

  /* bottom zone -------------------------------------------------- */
  .bottom-zone{
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 2%;
    top: 17%;

    div:first-child{
      margin-bottom: 2rem;
    }
  }
`;


const dataType = ['LINE', 'BAR', 'PIE', 'PROJECT'];

const MainPage = (props) => {
  const [typeName, setTypeName] = useState(DATA_TYPE_NAME.PIE);
  const [dataCount, setDataCount] = useState(6);
  const [data, setData] = useState(null);

  const extendProps = {
    data,
    width: SVG_CONTAINER_SIZE.WIDTH,
    height: SVG_CONTAINER_SIZE.HEIGHT,
    margin: SVG_CONTAINER_SIZE.MARGIN,
    innerRadius: SVG_CONTAINER_SIZE.INNER_RADIUS,
    outerRadius: SVG_CONTAINER_SIZE.OUTER_RADIUS,
  }

  useEffect(()=>{ 
    getNewData();
  }, [])

  function updateData(count) {
    if(count === 1 && dataCount < 12){
      let a = getRandomNum();
      let b = getRandomNum();
      let max = a > b? a : b;
      let min = a > b? b : a;
      const newItem = {
        date: getRandomDate(new Date(2020, 0, 1), new Date(2020, 11, 31)),
        max,
        min,
      }
      const newData = [...data, newItem].sort(function(a, b) {
        return a.date - b.date;
    })
      setData(newData);
      setDataCount(prevState => prevState + 1);

    }
    if(count === -1 && dataCount > 6){
      const newData = data.splice(0, data.length-1);
      setData(newData);
      setDataCount(prevState => prevState - 1);
    }
  }

  function getNewData() {
    const newData = [...Array(dataCount).keys()].map(item => {
      let a = getRandomNum();
      let b = getRandomNum();
      let max = a > b? a : b;
      let min = a > b? b : a;
      return {
        date: getRandomDate(new Date(2020, 0, 1), new Date(2020, 11, 31)),
        max,
        min,
      }
    })
    .sort(function(a, b) {
      return a.date - b.date;
  })
    setData(newData);
  }

  function getVisuallData(){
    switch(typeName){
      case DATA_TYPE_NAME.PIE:
        return <PiePage {...extendProps}/>
      case DATA_TYPE_NAME.BAR:
          return <BarPage {...extendProps}/> 
      case DATA_TYPE_NAME.LINE:
          return <LinePage {...extendProps}/>
      case DATA_TYPE_NAME.PROJECT:
          return <ProjectPage {...extendProps}/>
      default:
        return;
    }
  }

  function handleSwitch(name){
    // console.log('type name ::::::', name)
    setTypeName(name)
  }

  return (
    <Div>
      <div className="upper-bar">
        {dataType.map(item => (
          <div 
            key={item}
            className={typeName===DATA_TYPE_NAME[item]? "button --active" : "button"}
            onClick={()=> handleSwitch(DATA_TYPE_NAME[item])}
          >
            {item.toUpperCase()}
          </div>
        ))}
      </div>
      <div className="content-box">
        {getVisuallData()}
      </div>
      {typeName !== DATA_TYPE_NAME.PROJECT ?
        < div className="bottom-zone">
        <Button 
          onClick={getNewData}>
          Reset
        </Button>
        <Button 
          onClick={()=>updateData(1)}
          disabled={dataCount >= 12}
        >
          Add Item
        </Button>
        <Button 
          onClick={()=>updateData(-1)}
          disabled={dataCount <= 6}
        >
          Remove Item
        </Button>
      </ div> : null}
    </Div>
  );
};

export default MainPage;