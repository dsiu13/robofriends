import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import registerServiceWorker from './registerServiceWorker';
import { searchBots } from './reducer/reducer';
import { createLogger } from 'redux-logger';

const logger = createLogger();
const store = createStore(searchBots, applyMiddleware(logger))

ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>, document.getElementById('root'));
registerServiceWorker();
