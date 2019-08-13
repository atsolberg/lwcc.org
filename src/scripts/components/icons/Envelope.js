import React from 'react';
import { string, number, oneOfType } from 'prop-types';

function Envelope({
  color = 'currentColor',
  width = '19.25',
  height = '14.592',
}) {
  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
      <g transform="translate(0.25 -0.719)">
        <path
          d="M18.75,14.063H0V0H18.75V14.062ZM.781,1.19V13.281H17.969V1.19L9.376,9ZM1.495.781,9.376,7.946,17.257.781Z"
          transform="translate(0 0.969)"
          fill={color}
          stroke={color}
          strokeMiterlimit="10"
          strokeWidth="0.5"
        />
      </g>
    </svg>
  );
}
Envelope.propTypes = {
  color: string,
  width: oneOfType([string, number]),
  height: oneOfType([string, number]),
};

export default Envelope;
