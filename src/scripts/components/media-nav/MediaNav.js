import React from 'react';
import cx from 'classnames';
import { string, arrayOf, shape, oneOf, bool } from 'prop-types';

import styles from './styles';
import { getFlatPathName } from '../../util/misc';

const here = getFlatPathName();

function MediaNav({ items, variant = 'normal', centered = false }) {
  return (
    <ul
      css={styles}
      className={cx(`media-nav list-inline -${variant}`, {
        '-centered': centered,
      })}
    >
      {items.map(item => (
        <li
          key={item.title}
          className={cx('list-inline-item', {
            active: here.startsWith(getFlatPathName(item.url)),
          })}
        >
          <a href={item.url}>{item.title}</a>
        </li>
      ))}
    </ul>
  );
}
MediaNav.propTypes = {
  items: arrayOf(
    shape({
      title: string.isRequired,
      url: string.isRequired,
    }).isRequired
  ).isRequired,
  variant: oneOf(['normal', 'mini']),
  centered: bool,
};

export default MediaNav;
