import React from 'react';
import { string, arrayOf, shape } from 'prop-types';

import styles from './styles';
import Box from '../box/Box';
import Button from '../button';

function PlaylistBar({ lists, onPlaylist, ...rest }) {
  return (
    <Box {...rest}>
      <div className="playlist-bar" css={styles}>
        <ul className="playlist-list list-inline">
          {lists.map(list => (
            <li className="list-inline-item" key={list.title}>
              <Button variant="link" value={list.slug} onClick={onPlaylist}>
                {list.title}
              </Button>
            </li>
          ))}
        </ul>
        <div className="input-group input-group-sm playlist-search">
          <input className="form-control" type="text" placeholder="search" />
          <div className="input-group-append">
            <Button variant="primary">
              <i className="fa fa-search" />
            </Button>
          </div>
        </div>
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
