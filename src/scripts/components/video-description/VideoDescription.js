import React from 'react';
import cx from 'classnames';

import { ytVideoType } from '../../types/youtube';
import { parseVideo } from '../../util/youtube';

import styles from './styles';

function track(type) {
  if (window._gaq) {
    window._gaq.push(['_trackEvent', 'sharing', 'shared', `Share - ${type}`]);
  }
}

function VideoDescription({ data }) {
  const loading = !data;
  const video = !loading && parseVideo(data);

  return (
    <div css={styles} className={cx({ loading })}>
      {!loading && (
        <>
          <h3 dangerouslySetInnerHTML={{ __html: video.title }} />
          <div dangerouslySetInnerHTML={{ __html: video.description }} />
          <ul className="list-unstyled list-inline social-links">
            <li className="list-inline-item">
              <span>SHARE</span>
            </li>
            <li className="list-inline-item">
              <a
                className="share-link -fb"
                href={`http://www.facebook.com/sharer.php?u=${encodeURI(
                  video.url
                )}`}
                target="popup"
                rel="nofollow"
                onClick={() => track('Facebook')}
              >
                <i className="fab fa-facebook-square" aria-hidden="true" />
              </a>
            </li>
            <li className="list-inline-item">
              <a
                className="share-link -tw"
                href={`http://twitter.com/share?text=${
                  video.title
                }&amp;url=${encodeURI(video.url)}&via=lwccmpls`}
                target="popup"
                rel="nofollow"
                onClick={() => track('Twitter')}
              >
                <i className="fab fa-twitter-square" />
              </a>
            </li>
            <li className="list-inline-item">
              <a
                className="share-link -email"
                href={`mailto:?subject=${encodeURI(
                  video.title
                )}&body=${encodeURI(video.url)}`}
                onClick={() => track('Email')}
              >
                <i className="fa fa-envelope" />
              </a>
            </li>
          </ul>
        </>
      )}
    </div>
  );
}
VideoDescription.propTypes = {
  data: ytVideoType,
};

export default VideoDescription;
