import * as React from 'react';
import { Route, Router, Switch } from 'react-router';

import { PageLoading } from '@/components';
import { BaseComponent } from '@/domain';
import { DefaultLayout } from '@/layout';
import { MobileLayout } from '@/layout/MobileLayout';

const DesktopRoutes = React.lazy(() => import('./desktop'));
const MobileRoutes = React.lazy(() => import('./mobile'));

export class RouterRoot extends BaseComponent {

    private readonly renderDesktopRouter = () => {
        const { history } = this.context;

        return (
            <Router history={history}>
                <Switch>
                    <Route>
                        {() => (
                            <DefaultLayout>
                                <React.Suspense fallback={<PageLoading />}>
                                    <DesktopRoutes />
                                </React.Suspense>
                            </DefaultLayout>
                        )}
                    </Route>
                </Switch>
            </Router>
        );
    }

    private readonly renderMobileRouter = () => {
        const { history } = this.context;

        return (
            <Router history={history}>
                <Switch>
                    <Route>
                        {() => (
                            <MobileLayout>
                                <React.Suspense fallback={<PageLoading />}>
                                    <MobileRoutes />
                                </React.Suspense>
                            </MobileLayout>
                        )}
                    </Route>
                </Switch>
            </Router>
        );
    }

    public render() {
        return this.isSmallDevice
            ? this.renderMobileRouter()
            : this.renderDesktopRouter();
    }
}