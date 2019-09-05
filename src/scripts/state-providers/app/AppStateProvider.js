/**
 * Using react context as the app state management lib.
 * @see https://kentcdodds.com/blog/application-state-management-with-react
 */

import React, { createContext, useContext, useMemo } from 'react';
import { useImmerReducer } from 'use-immer';
import reducer, { initialState } from './reducer';

const AppStateContext = createContext(null);

function AppStateProvider(props) {
  const [state, dispatch] = useImmerReducer(reducer, initialState);
  const value = useMemo(() => [state, dispatch], [state, dispatch]);
  return <AppStateContext.Provider value={value} {...props} />;
}

export function useAppState() {
  const context = useContext(AppStateContext);
  if (!context) {
    throw new Error(`useAppState must be used within an AppStateProvider`);
  }
  const [state, dispatch] = context;

  return {
    state,
    dispatch,
  };
}

export default AppStateProvider;
