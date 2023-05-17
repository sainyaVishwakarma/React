import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// import App16 from './16-may/App16';
// import AppHW1 from './16-may/AppHW1'
// import AppHW2 from './16-may/AppHW2'
// import AppHW3 from './16-may/AppHW3'
// import AppHW4 from './16-may/AppHW4'
import AppParent from './17-may/AppParent'
// import AppSq from './17-may/AppSq'
// import AppHW1 from './17-may/AppHW1'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppParent />
  </React.StrictMode>
);

reportWebVitals();
