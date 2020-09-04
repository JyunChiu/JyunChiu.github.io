import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Label = styled.label`
  display: inline-block;
  width: ${props => props.width};
  height: auto;
  position: relative;
  cursor: pointer;
  opacity: ${props => (props.disabled ? 0.3 : 1)};
  pointer-events: ${props => (props.disabled ? 'none' : '')};
  input[type="checkbox"] {
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%; 
    z-index: 2;
    cursor: pointer;
    &.active svg,
    &:checked + svg {
      rect {
        opacity: 0.5;
        fill: ${props => props.color};
      };
      circle {
        fill: ${props => props.color};
        transform: translate(48px, 0);
      };
    }
  }
  &.disabled {
    opacity: 0.6;
    pointer-events: none;
  }
  /* &:active {
    svg {
      circle {
        transform: scale(1.06);
        stroke: #fff;
        stroke-width: 2px;
      }
    }
  } */
  svg {
    width: 100%;
    height: auto;
    path,
    circle {
      transition: 0.3s ease all;
    }
    rect {
      fill: #e0e0e0;
    }
    circle {
      fill: #f1f1f1;
    }
  }
`;

const Switch = (props) => {
  return (
    <Label className="switch" {...props}>
      <input type="checkbox" {...props} />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 106 75"
      >
        <g>
          <rect x="0.5" y="19" width="100" height="35" rx="20" />
          <circle cx="28" cy="35" r="28" />
        </g>
      </svg>
    </Label>
  );
}

Switch.propTypes = {
  checked: PropTypes.bool, // 'true' | 'false' 
  disabled: PropTypes.bool, // 'true' | 'false' | 'auto'
  width: PropTypes.string, // number'
};

Switch.defaultProps = {
  disabled: false,
  width: '3rem',
  color: '#2dd1ff',
  checked: false
};

export default Switch;


