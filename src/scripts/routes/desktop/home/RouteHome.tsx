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
import { AppPageProps, BasePageComponent, policies } from '@/domain';

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
        const { products } = this.context;

        const featureProducts = products.filter(o => o.isFeature);

        return (
            <PageContent>
                <PageContentCol1>
                    <PageHeader />
                    <HomeContent>
                        <SlideUp className="h-100 display-flex flex-direction-column">
                            <div>Collection No.01</div>
                            <div className="display-flex flex-direction-column justify-content-center flex-grow-1">
                                <h1 className="font-AbrilFatface">
                                    Minimalistic <br />
                                    Furniture
                            </h1>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, <br />
                                    sed diam nonummy nibh euismod tincidunt ut laoreet <br />
                                    dolore magna aliquam erat
                            </p>
                            </div>
                            <Row>
                                <Col xs={4}>
                                    <div><strong>01</strong></div>
                                    <div><strong>COLLECTION</strong></div>
                                    <p className="mb-0">
                                        <small>
                                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
                                    </small>
                                    </p>
                                </Col>
                                <Col xs={4}>
                                    <div><strong>02</strong></div>
                                    <div><strong>NEWS</strong></div>
                                    <p className="mb-0">
                                        <small>
                                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
                                    </small>
                                    </p>
                                </Col>
                                <Col xs={4}>
                                    <div><strong>03</strong></div>
                                    <div><strong>DEALERS</strong></div>
                                    <p className="mb-0">
                                        <small>
                                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
                                    </small>
                                    </p>
                                </Col>
                            </Row>
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