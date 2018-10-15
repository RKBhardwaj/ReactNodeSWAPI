import React from 'react';
import Header from './Header';
import { BrowserRouter } from 'react-router-dom';

import MainRoutes from '../routes';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <React.Fragment>
                <Header />
                <BrowserRouter>
                    <MainRoutes />
                </BrowserRouter>
            </React.Fragment>
        );
    }
}

export default App;