import React from 'react';
import { string, node } from 'prop-types';
import cx from 'classnames';

import tiles from '../../../img/tiles/*.jpg';
import Button from '../button';
import styles from './styles';

function ThreeUpTile({ bg, url, cta, title, className, ...rest }) {
  return (
    <div css={styles} className={cx(className, 'three-up-tile')} {...rest}>
      <img src={tiles[bg]} className="rounded-top" />
      <div className="cta rounded-bottom">
        <h3 className="title">{title}</h3>
        <Button className="btn-block" variant="primary" href={url}>
          {cta}
        </Button>
      </div>
    </div>
  );
}
ThreeUpTile.propTypes = {
  bg: string.isRequired,
  url: string.isRequired,
  cta: node.isRequired,
  title: node.isRequired,
};

export default ThreeUpTile;
