import React, { useEffect, useRef } from 'react';
import { array } from 'prop-types';
import Collapse from 'react-bootstrap/es/Collapse';

import { host, keyCodes } from '../../util/constants';
import Button from '../button';

import styles from './styles';

function SearchBar({ search: [searching, setSearching] }) {
  const inputRef = useRef();

  // Focus after opening
  useEffect(() => {
    if (searching) {
      setTimeout(() => {
        inputRef.current.focus();
      }, 1);
    }
  }, [searching]);

  function onSearch() {
    window.location.href = `${host}/?s=${inputRef.current.value}`;
  }
  function onKeyDown({ keyCode }) {
    if (keyCode === keyCodes.enter) {
      onSearch();
    } else if (keyCode === keyCodes.esc) {
      setSearching(false);
    }
  }

  return (
    <Collapse in={searching}>
      <div className="row" css={styles}>
        <div className="col-12">
          <div className="container searchbar p-sm">
            <div className="input-group">
              <input
                tabIndex={0}
                ref={inputRef}
                className="form-control"
                onKeyDown={onKeyDown}
              />
              <div className="input-group-append">
                <Button variant="primary" onClick={onSearch}>
                  <i className="fa fa-search" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Collapse>
  );
}
SearchBar.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  search: array.isRequired,
};

export default SearchBar;
