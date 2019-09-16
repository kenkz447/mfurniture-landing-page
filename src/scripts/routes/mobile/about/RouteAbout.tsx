import { RouteInfo } from 'qoobee';
import * as React from 'react';
import styled from 'styled-components';

import { MobilePageContent, SlideUp } from '@/components';
import { ABOUT_URL } from '@/configs';
import {
    AppPageProps,
    BasePageComponent,
    markdownToHTML,
    policies
} from '@/domain';

const AboutContent = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    background-image: url("/static/assets/about.png");
    background-size: cover;
    background-position: center;
`;

const AboutSlider = styled.div`
    min-height: 100vh;
    min-height: inherit;
    max-height: inherit;
    padding: 24px;
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

        const { pages } = this.context;

        const aboutPage = pages.find(o => o.slug === 'about');

        return (
            <MobilePageContent>
                <AboutContent className="mobile-content-full-screen mb-5" />
                <AboutSlider>
                    <SlideUp className="h-100 display-flex flex-direction-column justify-content-end">
                        {
                            aboutPage
                                ? (
                                    <article
                                        dangerouslySetInnerHTML={{ __html: markdownToHTML(aboutPage.content) }}
                                    />
                                )
                                : 'Not found!'
                        }
                    </SlideUp>
                </AboutSlider>
            </MobilePageContent>
        );
    }
}