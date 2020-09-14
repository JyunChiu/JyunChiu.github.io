import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { COLORS } from '../../styles/_variables';
import * as Mixins from '../../styles/_mixins';

const Div = styled.div`
  display: flex;
  flex-direction: ${props => props.direction};
  align-items: flex-end;
  .tag-box{
    margin: 0 0.5rem;
    display: flex;
    .tag{
      box-shadow: 0px 3px 6px 0px ${props => props.isDark ? '#4ea59f' : '#676767'};
      padding: 0.2rem 0.5rem;
      border-radius: 5px;
      color: ${props => props.isDark ? COLORS.BLACK : COLORS.WHITE};
      background: ${COLORS.LIGHT_GRAY};
      margin: 0 0.5rem;
      font-size: 0.8rem;
    }
  }
`
const TagSection = (props) => {
  const {
    label,
    tags,
    isDark,
  } = props;

  return (
    <Div isDark={isDark}>
      <div className='label'>{label}</div>
      <div className='tag-box'>
        {tags.map(item => <div className='tag'>{item}</div>)}
      </div>
    </Div >
  );
}

TagSection.defaultProps = {
  tags: []
}


export default TagSection;