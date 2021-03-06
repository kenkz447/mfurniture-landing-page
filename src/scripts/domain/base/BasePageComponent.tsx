import { RootContext, RoutePage } from 'qoobee';

import { AppPageProps, WithDomainContext } from './Types';

export class BasePageComponent<P extends AppPageProps, S = {}> extends RoutePage<P, S> {

    public static readonly contextType = RootContext;
    public readonly context!: WithDomainContext;

    public componentWillMount() {
        const { setContext } = this.context;

        setContext({
            routeParams: this.props.match.params
        });

        window.scroll({
            top: 0
        });
    }

    public componentWillUnmount() {
        const { setContext } = this.context;

        setContext({
            routeParams: null,
            globalModal: null,
            globalModalVisibled: false,
            globalModalProgressing: false,
        });
    }
}