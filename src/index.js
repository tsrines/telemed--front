import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { API_WS_ROOT } from './constants';
import { ActionCableProvider } from 'react-actioncable-provider';

ReactDOM.render(
  <ActionCableProvider url={API_WS_ROOT}>
    <Router>
      <App className='App' />
    </Router>
  </ActionCableProvider>,
  document.getElementById('root')
);
