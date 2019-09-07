import './MobileLayout.scss';

import * as React from 'react';

import {
    MobilePageHeader,
    MobilePageMenu,
    MobilePageWrapper,
    PageFooter
} from '@/components';
import { BaseComponent } from '@/domain';

interface MobileLayoutProps {
}

interface MobileLayoutState {
    readonly menuVissibled: boolean;
}

export class MobileLayout extends BaseComponent<MobileLayoutProps, MobileLayoutState> {
    constructor(props: MobileLayoutProps) {
        super(props);

        this.state = {
            menuVissibled: false,
        };
    }

    public componentDidMount() {
        const { history } = this.context;

        history.listen(() => {
            this.setState({
                menuVissibled: false
            });
        });
    }

    public render() {
        const { menuVissibled } = this.state;

        return (
            <React.Fragment>
                <MobilePageMenu />
                <MobilePageWrapper className={menuVissibled ? 'menu-visibled' : ''}>
                    <MobilePageHeader
                        onMenuToggle={() => this.setState({ menuVissibled: !menuVissibled })}
                    />
                    {this.props.children}
                    <PageFooter />
                </MobilePageWrapper>
            </React.Fragment>
        );
    }
}