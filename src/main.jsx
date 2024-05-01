import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense fallback={<span>Loading...</span>}>
      <App />
    </Suspense>
  </React.StrictMode>
);
