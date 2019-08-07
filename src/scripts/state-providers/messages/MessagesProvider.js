/**
 * Using react context as the app state management lib.
 * @see https://kentcdodds.com/blog/application-state-management-with-react
 */

import React, { createContext, useContext, useMemo } from 'react';
import { useImmerReducer } from 'use-immer';
import reducer, { initialState } from './reducer';

const MessagesContext = createContext(null);

function MessagesProvider(props) {
  const [state, dispatch] = useImmerReducer(reducer, initialState);
  const value = useMemo(() => [state, dispatch], [state]);
  return <MessagesContext.Provider value={value} {...props} />;
}

export function useMessages() {
  const context = useContext(MessagesContext);
  if (!context) {
    throw new Error(`useMessages must be used within an MessagesProvider`);
  }
  const [state, dispatch] = context;

  return {
    state,
    dispatch,
  };
}

export default MessagesProvider;
