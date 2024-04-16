import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers'; // Importing the root reducer
import './index.css';
import App from './App'; // Importing the main App component

const store = createStore(rootReducer); // Creating Redux store with rootReducer

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') // Rendering the main App component to the root DOM element
);

