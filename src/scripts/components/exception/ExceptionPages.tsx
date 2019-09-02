import { ErrorPageProps } from 'qoobee';
import React from 'react';

import { PageWrapper } from '../structures';

export const PermissionDenyPage = () => {
    return (
        <PageWrapper>
            <h1>403</h1>
        </PageWrapper>
    );
};

export const NotFoundPage = () => {
    return (
        <PageWrapper>
            <h1>404</h1>
        </PageWrapper>
    );
};

export function ErrorPage(props: ErrorPageProps) {
    return (
        <PageWrapper>
            <h1>500</h1>
        </PageWrapper>
    );
}