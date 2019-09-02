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
import { ABOUT_URL } from '@/configs';
import { AppPageProps, BasePageComponent, policies } from '@/domain';

const AboutContent = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    background-image: url("/static/assets/about.png");
    background-size: cover;
    background-position: center;
`;

const AboutSlider = styled.div`
    height: 100vh;
    min-height: inherit;
    max-height: inherit;
    padding: 0 20%;
    text-align: justify;
    
    .logo-simple {
        width : 100px;
        height : 100px;
    }
`;

export class RouteAbout extends BasePageComponent<AppPageProps> {
    public static readonly routeInfo: RouteInfo = {
        path: ABOUT_URL,
        title: 'About',
        exact: true,
        policies: [policies.locationAllowed]
    };

    public render() {
        return (
            <PageContent>
                <PageContentCol1>
                    <PageHeader />
                    <AboutContent />
                    <PageFooter />
                </PageContentCol1>
                <PageContentCol2>
                    <AboutSlider>
                        <SlideUp className="h-100 display-flex flex-direction-column justify-content-end">
                            <div className="text-center mb-5">
                                <img className="logo-simple" src="/static/logo-simple.png"  alt="[M] logo"/>
                            </div>
                            <p className="mb-5">
                                In cursus vestibulum nulla eget sodales. Praesent vel malesuada lorem. Phasellus pharetra sed eros at finibus. Vestibulum mollis fringilla diam vitae hendrerit. Quisque nulla arcu, cursus vitae finibus in, luctus sit amet diam.
                            </p>
                            <div>
                                <img
                                    className="w-100"
                                    src="/static/assets/about-detail.png"
                                    alt="detail image"
                                />
                            </div>
                        </SlideUp>
                    </AboutSlider>
                </PageContentCol2>
            </PageContent>
        );
    }
}