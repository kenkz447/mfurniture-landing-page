import { RouteInfo } from 'qoobee';
import * as React from 'react';
import { Redirect } from 'react-router';
import styled from 'styled-components';

import { MobilePageContent, SlideUp } from '@/components';
import { Img } from '@/components/domain';
import { CONTACT_URL } from '@/configs';
import {
    AppPageProps,
    BasePageComponent,
    markdownToHTML,
    policies
} from '@/domain';

const ContactContent = styled.div`
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

const ContactSlider = styled.div`
    min-height: inherit;
    max-height: inherit;
    padding: 24px;
    text-align: center;
    
    p {
        line-height: 2.3em;
    }
`;

export class RouteContact extends BasePageComponent<AppPageProps> {
    public static readonly routeInfo: RouteInfo = {
        path: CONTACT_URL,
        title: 'Contact',
        exact: true,
        policies: [policies.locationAllowed]
    };

    public render() {
        const { pages } = this.context;

        const contactPage = pages.find(o => o.slug === 'contact');

        if (!contactPage) {
            return <Redirect to="/not-found" />;
        }

        return (
            <MobilePageContent>
                <ContactContent
                    className="mobile-content-full-screen mb-5"
                >
                    <Img
                        file={contactPage.cover}
                        className="cover"
                        alt="contact cover photo"
                    />
                </ContactContent>
                <ContactSlider>
                    <SlideUp className="h-100 display-flex flex-direction-column justify-content-center">
                        <article
                            dangerouslySetInnerHTML={{ __html: markdownToHTML(contactPage.content) }}
                        />
                    </SlideUp>
                </ContactSlider>
            </MobilePageContent>
        );
    }
}