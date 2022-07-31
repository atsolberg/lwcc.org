import React from 'react';
import cx from 'classnames';
import { string, arrayOf, shape, oneOf, bool, any } from 'prop-types';
import { Link } from 'react-router-dom';

import { getFlatPathName } from '../../util/misc';
import styles from './styles';

function MediaNav({ items, variant = 'normal', centered = false, className }) {
  const here = getFlatPathName();
  return (
    <ul
      css={styles}
      className={cx(className, `media-nav list-inline -${variant}`, {
        '-centered': centered,
      })}
    >
      {items.map((item) => (
        <li
          key={item.title}
          className={cx('list-inline-item', {
            active: here.startsWith(getFlatPathName(item.url)),
          })}
        >
          <Link to={item.url}>{item.title}</Link>
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
  className: any,
};

export default MediaNav;
