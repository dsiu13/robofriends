import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Provider, connect } from 'react-redux';
import { createStore } from 'redux';
import registerServiceWorker from './registerServiceWorker';
import { searchBots } from './reducer/reducer';

const store = createStore(searchBots)

ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>, document.getElementById('root'));
registerServiceWorker();
