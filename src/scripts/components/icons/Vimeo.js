import React from 'react';
import { string, number, oneOfType } from 'prop-types';

function Vimeo({ color = 'currentColor', width = '19.2', height = '16.667' }) {
  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
      <g id="vimeo" transform="translate(-0.002 -0.438)">
        <path
          id="Path"
          d="M18.3,6.812c-1.954,4.174-6.67,9.855-9.65,9.855-2.938,0-3.362-6.265-4.966-10.434C2.892,4.18,2.382,4.652.9,5.688L0,4.524C2.158,2.626,4.318.422,5.646.3Q7.887.085,8.4,3.365C8.858,6.24,9.494,10.7,10.6,10.7c.864,0,2.993-3.539,3.1-4.8.194-1.853-1.362-1.909-2.714-1.33C13.13-2.437,22.026-1.148,18.3,6.812Z"
          transform="translate(0.002 0.439)"
          fill={color}
        />
      </g>
    </svg>
  );
}
Vimeo.propTypes = {
  color: string,
  width: oneOfType([string, number]),
  height: oneOfType([string, number]),
};

export default Vimeo;
