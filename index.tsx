
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const container = document.getElementById('root');

if (container) {
  try {
    const root = createRoot(container);
    // Render App
    root.render(<App />);
    
    // Only enable cursor-none after successful render to avoid "invisible mouse" on a broken page
    setTimeout(() => {
      document.body.classList.add('cursor-active');
    }, 100);

  } catch (error) {
    console.error("Quasar Critical Initialization Error:", error);
    container.innerHTML = `
      <div style="height: 100vh; display: flex; align-items: center; justify-content: center; background: #050505; color: white; font-family: 'Space Grotesk', sans-serif;">
        <div style="text-align: center; border: 1px solid rgba(255,255,255,0.1); padding: 40px; border-radius: 20px; background: rgba(255,255,255,0.02); backdrop-filter: blur(10px);">
          <h1 style="font-size: 14px; letter-spacing: 4px; text-transform: uppercase;">System Error</h1>
          <p style="opacity: 0.4; font-size: 11px; margin-top: 15px; letter-spacing: 1px;">The Quasar interface failed to initialize on your host.</p>
          <button onclick="window.location.reload()" style="margin-top: 20px; background: white; color: black; border: none; padding: 8px 16px; border-radius: 4px; font-size: 10px; cursor: pointer; text-transform: uppercase; font-weight: bold;">Retry Link</button>
        </div>
      </div>
    `;
  }
} else {
  console.error("Fatal: DOM Root not found.");
}
