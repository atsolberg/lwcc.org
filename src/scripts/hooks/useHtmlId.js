import { useState } from 'react';
import { uuid } from '../util/string';

function useHtmlId(providedId) {
  const [htmlId] = useState(providedId || uuid());

  return htmlId;
}

export default useHtmlId;
