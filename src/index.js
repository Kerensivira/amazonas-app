import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppRouters from './Routes/AppRouters';
import { Provider } from 'react-redux';
import { store } from './Redux/store/store'


ReactDOM.render(
    
    <Provider store={store}>
      <AppRouters />
    </Provider>,
  document.getElementById('root')
);
