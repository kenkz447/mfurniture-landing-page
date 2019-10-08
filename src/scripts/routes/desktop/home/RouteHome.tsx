import { RouteInfo } from 'qoobee';
import * as React from 'react';
import { Col, Row } from 'reactstrap';
import styled from 'styled-components';

import {
    PageContent,
    PageContentCol1,
    PageContentCol2,
    PageFooter,
    PageHeader,
    SlideUp
} from '@/components';
import { HOME_URL } from '@/configs';
import {
    AppPageProps,
    BasePageComponent,
    markdownToHTML,
    policies
} from '@/domain';

import { FeatureProductSlider } from './containers';

const HomeContent = styled.div`
    background: var(--primary);
    padding: 60px;
    color: white;
    flex-grow: 1;
    display: flex;
    flex-direction: column;

    h1 {
        font-size: 70px;
        font-family: 'Abril Fatface', cursive;
    }

    p {
        max-width: 400px;
    }
`;

const HomeSlider = styled.div`
    background: lightgray;
    height: inherit;
    min-height: inherit;
    max-height: inherit;
`;

export class RouteHome extends BasePageComponent<AppPageProps> {
    public static readonly routeInfo: RouteInfo = {
        path: HOME_URL,
        title: 'Trang chủ',
        exact: true,
        policies: [policies.locationAllowed]
    };

    public render() {
        const { pages } = this.context;
        const homePage = pages.find(o => o.slug === 'home');

        const { products } = this.context;

        const featureProducts = products.filter(o => o.isFeature);

        return (
            <PageContent>
                <PageContentCol1>
                    <PageHeader />
                    <HomeContent>
                        <SlideUp className="h-100 display-flex flex-direction-column">
                            {
                                homePage
                                    ? (
                                        <div
                                            className="display-flex flex-direction-column justify-content-center flex-grow-1"
                                            dangerouslySetInnerHTML={{ __html: markdownToHTML(homePage.content) }}
                                        />
                                    )
                                    : 'Not found!'
                            }
                        </SlideUp>
                    </HomeContent>
                    <PageFooter />
                </PageContentCol1>
                <PageContentCol2>
                    <HomeSlider>
                        <FeatureProductSlider
                            products={featureProducts}
                        />
                    </HomeSlider>
                </PageContentCol2>
            </PageContent>
        );
    }
}