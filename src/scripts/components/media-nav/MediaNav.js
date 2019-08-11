import React from 'react';
import cx from 'classnames';
import { string, arrayOf, shape } from 'prop-types';

import styles from './styles';
import { getFlatPathName } from '../../util/misc';

const here = getFlatPathName();

function MediaNav({ items }) {
  return (
    <ul css={styles} className="media-nav list-inline">
      {items.map(item => (
        <li
          key={item.title}
          className={cx('list-inline-item', {
            active: here === getFlatPathName(item.url),
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
};

export default MediaNav;
