import React from 'react';
import { render } from 'react-dom';

import ABTestsProvider from './components/ABTestsProvider';
import App from './components/App';
import AppStateProvider from './state-providers/app/AppStateProvider';

const root = document.getElementById('page-container');
render(
  <ABTestsProvider>
    <AppStateProvider>
      <App />
    </AppStateProvider>
  </ABTestsProvider>,
  root
);
