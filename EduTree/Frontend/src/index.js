import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import AppWithRouter from './App';
import store from './components/redux/store';

ReactDOM.render(
  <Provider store={store}>
    <AppWithRouter />
  </Provider>,
  document.getElementById('root')
);
