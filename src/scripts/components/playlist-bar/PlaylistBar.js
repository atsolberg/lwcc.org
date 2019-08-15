import React from 'react';
import cx from 'classnames';
import { string, arrayOf, shape, func } from 'prop-types';

import styles from './styles';
import Box from '../box/Box';
import Button from '../button';

function PlaylistBar({ lists, active, onSelect, ...rest }) {
  return (
    <Box {...rest}>
      <div className="playlist-bar" css={styles}>
        <ul className="playlist-list list-inline">
          {lists.map(list => (
            <li className="list-inline-item" key={list.title}>
              <Button
                variant="link"
                value={list.id}
                onClick={onSelect}
                className={cx({ active: list.id === active })}
              >
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
      id: string.isRequired,
      title: string.isRequired,
      pl_id: string.isRequired,
    })
  ).isRequired,
  active: string.isRequired,
  onSelect: func.isRequired,
};

export default PlaylistBar;
