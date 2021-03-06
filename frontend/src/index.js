import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
//import { Router, Switch, Route } from 'react-router-dom';
import { render } from 'react-dom';
import thunk from 'redux-thunk';
//import createBrowserHistory from 'history/createBrowserHistory';
import rootReducer from './reducers';
import Root from './components/Root';
import AccountDragons from './components/AccountDragons';
import { fetchAuthenticated } from './action/account';
import './index.css';

//const history = createBrowserHistory();

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
);

store.dispatch(fetchAuthenticated())
.then(() => {
    render(
        <Provider store={store}>
            <Root />
        </Provider>,
        document.getElementById('root')
    );
});