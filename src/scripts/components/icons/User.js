import React from 'react';
import { string, number, oneOfType } from 'prop-types';

function User({ color = 'currentColor', width = '17.599', height = '17.6' }) {
  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
      <g transform="translate(0.3 -0.2)">
        <path
          d="M17,17H0l0-.708c-.006-1.94.091-2.976,2.251-3.474l.145-.033c1.669-.384,3.245-.747,3.653-1.651a1.6,1.6,0,0,0-.193-1.445C3.526,5.389,4.241,2.961,4.875,1.9A4.065,4.065,0,0,1,8.5,0a4.049,4.049,0,0,1,3.6,1.866c1.093,1.816.754,4.594-.956,7.822a1.609,1.609,0,0,0-.182,1.451c.411.9,2,1.267,3.691,1.657l.1.022c2.163.5,2.259,1.543,2.25,3.5L17,17ZM8.5.708A3.332,3.332,0,0,0,5.484,2.259c-.948,1.591-.585,4.176,1,7.092a2.273,2.273,0,0,1,.215,2.075c-.583,1.294-2.975,1.8-4,2.02-.112.024-.21.045-.289.063-1.636.378-1.707.929-1.7,2.784H16.291c.008-1.853-.062-2.4-1.7-2.784-.1-.023-.215-.047-.35-.076-1.081-.228-3.332-.7-3.923-2a2.291,2.291,0,0,1,.2-2.076c1.588-3,1.934-5.531.975-7.126A3.317,3.317,0,0,0,8.5.708Z"
          transform="translate(0 0.5)"
          fill={color}
          stroke={color}
          strokeMiterlimit="10"
          strokeWidth="0.6"
        />
      </g>
    </svg>
  );
}
User.propTypes = {
  color: string,
  width: oneOfType([string, number]),
  height: oneOfType([string, number]),
};

export default User;
