import React from 'react';
import { createRoot } from 'react-dom/client';

import ABTestsProvider from './components/ABTestsProvider';
import App from './components/App';
import AppStateProvider from './state-providers/app/AppStateProvider';

const target = document.getElementById('page-container');
const root = createRoot(target);
root.render(
  <ABTestsProvider>
    <AppStateProvider>
      <App />
    </AppStateProvider>
  </ABTestsProvider>
);
