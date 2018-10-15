import React from 'react';
import { Switch, Route } from 'react-router-dom';

import RoutesName from './common/routes';
import Login from './components/Login/LoginController';
import Dashboard from './components/Dashboard/DashboardController';

const MainRoutes = () => (
    <React.Fragment>
        <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path={RoutesName.LOGIN} component={Login} />
            <Route exact path={RoutesName.DASHBOARD} component={Dashboard} />
        </Switch>
    </React.Fragment>
);

export default MainRoutes;