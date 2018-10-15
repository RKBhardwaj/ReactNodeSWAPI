import { createStore, applyMiddleware } from 'redux';
import createHistory from 'history/createBrowserHistory';
import reducers from '../reducers';
import { routerMiddleware } from 'react-router-redux';
import reduxThunk from 'redux-thunk';

const createMiddleware = (history) => {
    return applyMiddleware(reduxThunk, routerMiddleware(history || createHistory()));   
};

export const configureReduxStore = (initialState, history) => {
    const middleware = createMiddleware(history);
    return createStore(reducers, initialState, middleware)
}

export const history = createHistory();