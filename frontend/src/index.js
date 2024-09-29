// index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // Import from 'react-dom/client'
import App from './App';
import { GlobalProvider } from './context/globalContext';
import { AuthProvider } from './context/authContext';

// Select the root element
const container = document.getElementById('root');

// Create a root.
const root = ReactDOM.createRoot(container);

// Render the app
root.render(
  <React.StrictMode>
    <AuthProvider>
      <GlobalProvider>
        <App />
      </GlobalProvider>
    </AuthProvider>
  </React.StrictMode>
);
