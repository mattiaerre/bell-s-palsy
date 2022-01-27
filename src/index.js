import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import paths from './files.json';
import './index.css';
import Playground from './Playground';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    {Boolean(process.env.REACT_APP_PLAYGROUND) ? (
      <Playground />
    ) : (
      <App paths={paths} version="0.7.0" />
    )}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
