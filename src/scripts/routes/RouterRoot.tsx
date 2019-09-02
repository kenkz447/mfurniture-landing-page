import { RootContext } from 'qoobee';
import * as React from 'react';
import { Route, Router, Switch } from 'react-router';

import { PageLoading } from '@/components';
import { WithDomainContext } from '@/domain';
import { DefaultLayout } from '@/layout';

const MainRoutes = React.lazy(() => import('./main'));

export class RouterRoot extends React.PureComponent {
    public static readonly contextType = RootContext;
    public readonly context!: WithDomainContext;

    private readonly mainRouteComponent = () => {
        return (
            <DefaultLayout>
                <React.Suspense fallback={<PageLoading />}>
                    <MainRoutes />
                </React.Suspense>
            </DefaultLayout>
        );
    }

    public render() {
        const { history } = this.context;

        return (
            <Router history={history}>
                <Switch>
                    <Route>
                        {this.mainRouteComponent}
                    </Route>
                </Switch>
            </Router>
        );
    }
}