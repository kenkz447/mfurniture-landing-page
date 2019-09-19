import { RouteInfo } from 'qoobee';
import * as React from 'react';
import { Redirect } from 'react-router';
import styled from 'styled-components';

import { MobilePageContent, SlideUp } from '@/components';
import { Img } from '@/components/domain';
import { ABOUT_URL } from '@/configs';
import {
    AppPageProps,
    BasePageComponent,
    markdownToHTML,
    policies
} from '@/domain';

const AboutContent = styled.div`
    flex-grow: 1;
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

        if (!aboutPage) {
            return <Redirect to="/not-found" />;
        }

        return (
            <MobilePageContent>
                <AboutContent className="mobile-content-full-screen mb-5">
                    <Img
                        file={aboutPage.cover}
                        className="cover"
                        alt="about cover photo"
                    />
                </AboutContent>
                <AboutSlider>
                    <SlideUp className="h-100 display-flex flex-direction-column justify-content-end">
                        <article
                            dangerouslySetInnerHTML={{ __html: markdownToHTML(aboutPage.content) }}
                        />
                    </SlideUp>
                </AboutSlider>
            </MobilePageContent>
        );
    }
}