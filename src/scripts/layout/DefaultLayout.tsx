import './DefaultLayout.scss';

import * as React from 'react';

import { PageWrapper } from '@/components';
import { PageSider } from '@/components/structures/PageSider';
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
            <PageWrapper>
                <div className="flex-grow-1 min-height-inherit">
                    {this.props.children}
                </div>
                <PageSider />
            </PageWrapper>
        );
    }
}