import React from 'react';
import { string, shape, objectOf, arrayOf } from 'prop-types';

export const text = {
  /**
   * Weave <br>'s in between each string in an array of strings.
   * Each string in the original array is wrapped in a span to apply a key.
   * @param {String[]} textArray - The array of strings to weave <br>'s into.
   */
  break: textArray =>
    textArray.reduce((prev, curr, i) => {
      prev.push(<span key={`t-${i}`}>{curr}</span>);
      if (i < textArray.length - 1) prev.push(<br key={`b-${i}`} />);
      return prev;
    }, []),
};

/**
 * Convenient condition helper to abstract ternaries like in jsx.
 * USAGE:
 * <ul>
 *   {rif(user, <li>Hi, {user}</li>}
 * </ul>
 */
export const rif = (condition, then, otherwise = '') =>
  condition ? then : otherwise;

export const unless = (condition, then, otherwise) =>
  !condition ? then : otherwise;

export const entitiesOf = type =>
  shape({
    byId: objectOf(type),
    allIds: arrayOf(string).isRequired,
  });
