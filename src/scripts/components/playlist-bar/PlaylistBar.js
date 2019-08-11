import React from 'react';
import { string, arrayOf, shape } from 'prop-types';

import styles from './styles';
import Box from '../box/Box';

function PlaylistBar({ lists }) {
  return (
    <Box>
      <div css={styles}>
        <ul className="list-inline">
          {lists.map(list => (
            <li className="list-inline-item" key={list.title}>
              <a href="#">{list.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </Box>
  );
}
PlaylistBar.propTypes = {
  lists: arrayOf(
    shape({
      title: string.isRequired,
      slug: string.isRequired,
    })
  ).isRequired,
};

export default PlaylistBar;
