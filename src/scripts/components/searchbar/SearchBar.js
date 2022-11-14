import React, { useEffect, useRef } from 'react';
import { array } from 'prop-types';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';

import { host, keyCodes } from '../../util/constants';
import Button from '../button/Button';

function SearchBar({ search: [searching, setSearching] }) {
  const inputRef = useRef();

  // Focus after opening
  useEffect(() => {
    if (searching) setTimeout(() => inputRef.current.focus(), 1);
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
    <div>
      <div className="bg-white">
        <div className="col-12">
          <div className="container-sm p-3">
            <div className="flex items-center justify-center max-w-[400px] my-0 mx-auto focus:ring-primary">
              <input
                type="text"
                tabIndex={0}
                ref={inputRef}
                className="form-input focus:ring-primary focus:border-primary"
                onKeyDown={onKeyDown}
              />
              <Button
                variant="primary"
                onClick={onSearch}
                className="rounded-l-none"
              >
                <MagnifyingGlassIcon width="24" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
SearchBar.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  search: array.isRequired,
};

export default SearchBar;
