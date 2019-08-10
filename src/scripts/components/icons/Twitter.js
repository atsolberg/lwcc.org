import React from 'react';
import { string, number, oneOfType } from 'prop-types';

function Twitter({ color = 'currentColor', width = '21', height = '17.048' }) {
  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
      <defs>
        <clipPath id="clip-path">
          <path
            id="Clip_2"
            data-name="Clip 2"
            d="M0,0H21V17.048H0Z"
            transform="translate(0 0)"
            fill="none"
          />
        </clipPath>
      </defs>
      <path
        id="Clip_2-2"
        data-name="Clip 2"
        d="M0,0H21V17.048H0Z"
        transform="translate(0 0)"
        fill="none"
      />
      <g id="twitter-2" data-name="twitter" clipPath="url(#clip-path)">
        <path
          id="Fill_1"
          data-name="Fill 1"
          d="M6.6,17.048A12.151,12.151,0,0,0,18.86,4.838v-.55A8.75,8.75,0,0,0,21,2.048a8.62,8.62,0,0,1-2.47.68A4.309,4.309,0,0,0,20.42.358a8.657,8.657,0,0,1-2.74,1A4.31,4.31,0,0,0,10.23,4.3a4.264,4.264,0,0,0,.11,1A12.254,12.254,0,0,1,1.46.838,4.279,4.279,0,0,0,2.8,6.568a4.288,4.288,0,0,1-2-.54v.05a4.3,4.3,0,0,0,3.5,4.21,4.312,4.312,0,0,1-1.95.07,4.309,4.309,0,0,0,4,3A8.671,8.671,0,0,1,1,15.178a8.8,8.8,0,0,1-1-.06,12.234,12.234,0,0,0,6.6,1.93"
          transform="translate(0 0)"
          fill={color}
        />
      </g>
    </svg>
  );
}
Twitter.propTypes = {
  color: string,
  width: oneOfType([string, number]),
  height: oneOfType([string, number]),
};

export default Twitter;
