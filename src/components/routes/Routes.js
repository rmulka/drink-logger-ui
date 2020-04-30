import React from 'react';
import { withRouter, Route } from 'react-router-dom';
import ProtectedRoute from '../Auth/ProtectedRoute';

import ROUTES from '../../metadata/routeMetadata';

const Routes = () => (
    ROUTES.map(route => (
        route.protected
        ? <ProtectedRoute key={route.path} exact={route.exact} path={route.path} component={route.component} />
        : <Route key={route.path} exact={route.exact} path={route.path} component={route.component} />
    ))
);

export default withRouter(Routes);