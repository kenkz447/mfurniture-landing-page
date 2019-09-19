import './DefaultLayout.scss';

import * as React from 'react';

import { PageSider, PageWrapper } from '@/components';
import { BaseComponent } from '@/domain';

interface DefaultLayoutProps {
}

interface DefaultLayoutState {
}

export class DefaultLayout extends BaseComponent<DefaultLayoutProps, DefaultLayoutState> {
    constructor(props: DefaultLayoutProps) {
        super(props);
    }

    public render() {
        return (
            <PageWrapper className="default-layout">
                <div
                    id="defaultLayoutContent"
                    className="flex-grow-1 min-height-inherit"
                >
                    {this.props.children}
                </div>
                <PageSider />
            </PageWrapper>
        );
    }
}