
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const container = document.getElementById('root');
const fallback = document.getElementById('loading-fallback');

if (container) {
  try {
    // Activate custom cursor styling once JS is running
    document.body.classList.add('js-active');
    
    const root = createRoot(container);
    root.render(<App />);

    // Remove fallback once React starts
    if (fallback) {
      setTimeout(() => {
        fallback.style.opacity = '0';
        setTimeout(() => fallback.remove(), 500);
      }, 500);
    }
  } catch (error) {
    console.error("Quasar Critical Initialization Error:", error);
    if (fallback) fallback.innerText = "Quasar Initialization Failed. Check Console.";
  }
} else {
  console.error("Quasar Error: Root container not found.");
}
