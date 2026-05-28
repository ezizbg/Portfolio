import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import '@/styles/_reset.scss';
import '@/styles/_typography.scss';
import '@/styles/index.scss';
import { App } from './App';

const root = document.getElementById('root');
if (!root) throw new Error('#root element not found');

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
