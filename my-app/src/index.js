import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App'

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'; 
import rootReducer from './reducers';
import thunk from 'redux-thunk';

import { fetchMems } from './actions';


const store = createStore(rootReducer, applyMiddleware(thunk));

store.subscribe(() => console.log('store', store.getState()));
store.dispatch(fetchMems());


ReactDom.render(
<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'));