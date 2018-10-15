import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/App';
import { configureReduxStore } from './store';
import './stylesheets/app.scss';

ReactDOM.render(
    <Provider store={configureReduxStore()}>
        <App />
    </Provider>, 
    document.getElementById('app')
);