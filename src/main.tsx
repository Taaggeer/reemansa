// Ensure window.fetch is writable and has setter on Window.prototype to avoid "Cannot set property fetch of #<Window> which has only a getter"
if (typeof window !== 'undefined') {
  try {
    let currentFetch = window.fetch;
    const targets = [
      window,
      typeof Window !== 'undefined' ? Window.prototype : null,
      Object.getPrototypeOf(window),
      typeof globalThis !== 'undefined' ? globalThis : null,
    ];

    targets.forEach((target) => {
      if (!target) return;
      try {
        Object.defineProperty(target, 'fetch', {
          get() {
            return currentFetch;
          },
          set(val) {
            currentFetch = val;
          },
          configurable: true,
          enumerable: true,
        });
      } catch {}
    });
  } catch {}
}

import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
