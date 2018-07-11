import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import registerServiceWorker from './registerServiceWorker';
import { searchBots, requestRobots } from './reducer/reducer';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

const logger = createLogger();
const rootReducer = combineReducers({ searchBots, requestRobots });
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));

ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>, document.getElementById('root'));
registerServiceWorker();
