import { AppCoreContext, Role } from 'qoobee';
import { WithContextProps } from 'react-context-service';
import { RouteComponentProps } from 'react-router';
import { ModalProps } from 'reactstrap';

import { Blog, Dealer, Page, Product, Setting, Social } from '@/restful';

import { AuthClient } from './AuthClient';

interface GlobalModalModalProps extends Partial<ModalProps> {
    readonly onOk: () => void;
    readonly okLabel: string;
}

interface IdentyContext {
    readonly currentRole: Role;
}

interface DataContext {
    readonly products: Product[];
    readonly dealers: Dealer[];
    readonly blogs: Blog[];
    readonly pages: Page[];
    readonly settings: Setting[];
    readonly socials: Social[];
}

interface DomainContext extends IdentyContext, DataContext, AppCoreContext<{}> {
    readonly authClient: AuthClient<{}>;
    readonly globalModal?: GlobalModalModalProps | null;
    readonly globalModalProgressing?: boolean;
    readonly globalModalVisibled?: boolean;
    // tslint:disable-next-line:no-any
    readonly routeParams: any;
}

export type WithDomainContext = WithContextProps<DomainContext, {}>;

export type AppPageProps<T = {}> =
    RouteComponentProps<T> &
    WithDomainContext;