import { routeFrom } from 'qoobee';
import * as React from 'react';
import { Route, Switch } from 'react-router';

import { NotFoundPage } from '@/components';

import { RouteAbout } from './about';
import { RouteBlogs } from './blogs';
import { RouteCollection, RouteCollectionDetail } from './collection';
import { RouteContact } from './contact';
import { RouteDealers } from './dealers';
import { RouteHome } from './home';

export const routes = routeFrom([
    RouteHome,
    RouteAbout,
    RouteDealers,
    RouteContact,
    RouteBlogs,
    RouteCollection,
    RouteCollectionDetail
]);

export default () => (
    <Switch>
        {routes}
        <Route component={NotFoundPage} />
    </Switch>
);