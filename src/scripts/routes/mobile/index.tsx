import { routeFrom } from 'qoobee';
import * as React from 'react';
import { Route, Switch } from 'react-router';

import { NotFoundPage } from '@/components';

import { RouteAbout } from './about';
import { RouteBlogs } from './blogs';
import { RouteCollection } from './collection';
import { RouteContact } from './contact';
import { RouteDealers } from './dealers';
import { RouteHome } from './home';

export const routes = routeFrom([
    RouteHome,
    RouteCollection,
    RouteAbout,
    RouteDealers,
    RouteContact,
    RouteBlogs
]);

export default () => (
    <Switch>
        {routes}
        <Route component={NotFoundPage} />
    </Switch>
);