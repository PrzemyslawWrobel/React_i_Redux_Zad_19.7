import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './presentationals/App';
import { Provider } from 'react-redux';
import reducer from './reducers/reducer.js';
import { createStore } from 'redux';
import DevTools from './tools/DevTools';


const store = createStore(
  reducer,
  DevTools.instrument()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);



