
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const container = document.getElementById('root');

if (container) {
  try {
    const root = createRoot(container);
    // Temporarily removing StrictMode to ensure clean initialization on GitHub environment
    root.render(<App />);
    
    // Activate cursor only after we are sure the app has attempted to mount
    document.body.classList.add('cursor-active');
  } catch (error) {
    console.error("Quasar Critical Initialization Error:", error);
    container.innerHTML = `
      <div style="height: 100vh; display: flex; align-items: center; justify-content: center; background: #050505; color: white; font-family: sans-serif;">
        <div style="text-align: center; border: 1px solid rgba(255,255,255,0.1); padding: 40px; border-radius: 20px;">
          <h1 style="font-size: 18px; letter-spacing: 2px;">QUASAR LINK FAILURE</h1>
          <p style="opacity: 0.5; font-size: 12px; margin-top: 10px;">Check console for deployment logs.</p>
        </div>
      </div>
    `;
  }
}
