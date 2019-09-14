import { RouteInfo } from 'qoobee';
import * as React from 'react';
import styled from 'styled-components';

import { MobilePageContent, SlideUp } from '@/components';
import { COLLECTION_LIST_URL } from '@/configs';
import { AppPageProps, BasePageComponent, policies } from '@/domain';

import { ProductList } from './containers';

const BlogsContent = styled.div`
    flex-grow: 1;
`;

type RouteCollectionProps = AppPageProps<{ readonly productType: string }>;

export class RouteCollection extends BasePageComponent<RouteCollectionProps> {
    public static readonly routeInfo: RouteInfo = {
        path: COLLECTION_LIST_URL,
        title: 'Collection',
        exact: true,
        policies: [policies.locationAllowed]
    };

    public render() {
        const { match: { params } } = this.props;

        return (
            <MobilePageContent className="one-column hidden-scrollbar">
                <BlogsContent>
                    <SlideUp>
                        <ProductList productType={params.productType} />
                    </SlideUp>
                </BlogsContent>
            </MobilePageContent>
        );
    }
}