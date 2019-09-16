import { RouteInfo } from 'qoobee';
import * as React from 'react';
import styled from 'styled-components';

import { MobilePageContent, SlideUp } from '@/components';
import { CONTACT_URL } from '@/configs';
import {
    AppPageProps,
    BasePageComponent,
    markdownToHTML,
    policies
} from '@/domain';

const ContactContent = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    background-image: url("/static/assets/contact.jpg");
    background-size: cover;
    background-position: center;
`;

const ContactSlider = styled.div`
    height: 100vh;
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

        return (
            <MobilePageContent>
                <ContactContent className="mobile-content-full-screen mb-5" />
                <ContactSlider>
                    <SlideUp className="h-100 display-flex flex-direction-column justify-content-center">
                        {
                            contactPage
                                ? (
                                    <article
                                        dangerouslySetInnerHTML={{ __html: markdownToHTML(contactPage.content) }}
                                    />
                                )
                                : 'Not found!'
                        }
                    </SlideUp>
                </ContactSlider>
            </MobilePageContent>
        );
    }
}