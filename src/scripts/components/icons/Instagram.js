import React from 'react';
import { string, number, oneOfType } from 'prop-types';

function Instagram({ color = 'currentColor', width = '18', height = '18' }) {
  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
      <path
        id="Shape"
        d="M9,18c-2.45,0-2.767-.01-3.711-.054C2.015,17.8.2,15.985.054,12.711.01,11.767,0,11.451,0,9,0,6.6.01,6.278.055,5.289.2,2.015,2.014.2,5.289.054,6.233.01,6.55,0,9,0c2.4,0,2.723.01,3.712.055C15.989.2,17.8,2.014,17.946,5.289,17.99,6.233,18,6.55,18,9c0,2.4-.01,2.723-.055,3.711-.148,3.274-1.958,5.084-5.234,5.235C11.767,17.99,11.451,18,9,18ZM9,1.622c-2.415,0-2.7.009-3.637.052-2.439.111-3.577,1.248-3.689,3.689C1.631,6.3,1.622,6.585,1.622,9s.009,2.7.052,3.637a3.937,3.937,0,0,0,.969,2.709,3.918,3.918,0,0,0,2.72.981c.938.043,1.221.052,3.637.052s2.7-.009,3.638-.052c2.439-.112,3.577-1.249,3.689-3.689.042-.953.051-1.238.051-3.637,0-2.423-.009-2.7-.051-3.637-.112-2.441-1.25-3.578-3.689-3.689C11.711,1.631,11.43,1.622,9,1.622Zm0,12A4.622,4.622,0,1,1,13.622,9,4.627,4.627,0,0,1,9,13.622ZM9,6a3,3,0,1,0,3,3A3,3,0,0,0,9,6Zm4.8-.724A1.08,1.08,0,1,1,14.883,4.2,1.082,1.082,0,0,1,13.8,5.276Z"
        fill={color}
      />
    </svg>
  );
}
Instagram.propTypes = {
  color: string,
  width: oneOfType([string, number]),
  height: oneOfType([string, number]),
};

export default Instagram;
