import { RouteInfo } from 'qoobee';
import * as React from 'react';
import { Redirect } from 'react-router';
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
import { Img } from '@/components/domain';
import { DEALERS_URL } from '@/configs';
import {
    AppPageProps,
    BasePageComponent,
    markdownToHTML,
    policies
} from '@/domain';

import { Dealers } from './containers';

const DealersContent = styled.div`
    flex-grow: 1;
    height: 100%;
    position: relative;
    overflow: hidden;
    .cover {
        width: auto;
        height: 100%;
        max-height: 100%;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
    }
`;

const DealersSlider = styled.div`
    height: 100vh;
    min-height: inherit;
    max-height: inherit;
    padding: 0 20%;
    text-align: justify;
    
    h1 {
        font-size: 55px;
        text-align: center;
    }
`;

export class RouteDealers extends BasePageComponent<AppPageProps> {
    public static readonly routeInfo: RouteInfo = {
        path: DEALERS_URL,
        title: 'Dealers',
        exact: true,
        policies: [policies.locationAllowed]
    };

    public render() {

        const { pages } = this.context;

        const dealersPage = pages.find(o => o.slug === 'dealers');

        if (!dealersPage) {
            return <Redirect to="/not-found" />;
        }

        return (
            <PageContent>
                <PageContentCol1>
                    <PageHeader />
                    <DealersContent>
                        <Img
                            file={dealersPage.cover}
                            className="cover"
                            alt="dealers cover photo"
                        />
                    </DealersContent>
                    <PageFooter />
                </PageContentCol1>
                <PageContentCol2>
                    <DealersSlider>
                        <SlideUp className="h-100 display-flex flex-direction-column justify-content-end">
                            <div
                                className="mb-5"
                                dangerouslySetInnerHTML={{ __html: markdownToHTML(dealersPage.content) }}
                            />
                            <Dealers />
                        </SlideUp>
                    </DealersSlider>
                </PageContentCol2>
            </PageContent>
        );
    }
}