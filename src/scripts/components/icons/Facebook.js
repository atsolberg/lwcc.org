import React from 'react';
import { string, number, oneOfType } from 'prop-types';

function Facebook({ color = 'currentColor', width = '18', height = '18' }) {
  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
      <path
        d="M.994,0A.993.993,0,0,0,0,.994V17.006A.993.993,0,0,0,.994,18H9V10.8H6.3V8.1H9l.005-2.02a3.238,3.238,0,0,1,3.447-3.591,19.18,19.18,0,0,1,2.1.107V5.026H13.109c-1.128,0-1.409.535-1.409,1.322V8.084h2.753L14.1,10.8H11.7V18h5.306A.993.993,0,0,0,18,17.006V.994A.993.993,0,0,0,17.006,0Z"
        fill={color}
      />
    </svg>
  );
}
Facebook.propTypes = {
  color: string,
  width: oneOfType([string, number]),
  height: oneOfType([string, number]),
};

export default Facebook;
