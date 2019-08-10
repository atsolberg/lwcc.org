import React, { useEffect, useRef } from 'react';
import Collapse from 'react-bootstrap/es/Collapse';
import { onEnter } from '../../util/function';
import { host } from '../../util/constants';

function SearchBar({ searching }) {
  const inputRef = useRef();

  // Focus after opening
  useEffect(() => {
    if (searching) {
      setTimeout(() => {
        inputRef.current.focus();
      }, 1);
    }
  }, [searching]);

  const onSearch = onEnter(({ target: { value } }) => {
    window.location.href = `${host}/?s=${value}`;
  });

  return (
    <Collapse in={searching}>
      <div className="row bg-light">
        <div className="col-12">
          <div className="container searchbar padded-sm">
            <input
              tabIndex={0}
              ref={inputRef}
              className="form-control"
              onKeyDown={onSearch}
            />
          </div>
        </div>
      </div>
    </Collapse>
  );
}

export default SearchBar;
