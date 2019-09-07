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
import { DEALERS_URL } from '@/configs';
import { AppPageProps, BasePageComponent, policies } from '@/domain';

import { Dealers } from './containers';

const DealersContent = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    background-image: url("/static/assets/dealers.jpg");
    background-size: cover;
    background-position: center;
`;

const DealersSlider = styled.div`
    height: 100vh;
    min-height: inherit;
    max-height: inherit;
    padding: 0 20%;
    text-align: justify;
    
    h1 {
        font-size: 55px;
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
        return (
            <PageContent>
                <PageContentCol1>
                    <PageHeader />
                    <DealersContent />
                    <PageFooter />
                </PageContentCol1>
                <PageContentCol2>
                    <DealersSlider>
                        <SlideUp className="h-100 display-flex flex-direction-column justify-content-end">
                            <h1 className="text-center mb-5">
                                DEALERS
                            </h1>
                            <p className="mb-5">
                                Please choose a city for information about possible dealers of our [M] Collection.
                            </p>
                            <Dealers />
                        </SlideUp>
                    </DealersSlider>
                </PageContentCol2>
            </PageContent>
        );
    }
}