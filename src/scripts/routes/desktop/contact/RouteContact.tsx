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
import { CONTACT_URL } from '@/configs';
import {
    AppPageProps,
    BasePageComponent,
    markdownToHTML,
    policies
} from '@/domain';

const ContactContent = styled.div`
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

const ContactSlider = styled.div`
    height: 100vh;
    min-height: inherit;
    max-height: inherit;
    padding: 0 20%;
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
            <PageContent>
                <PageContentCol1>
                    <PageHeader />
                    <ContactContent>
                        <Img
                            file={contactPage.cover}
                            className="cover"
                            alt="contact cover photo"
                        />
                    </ContactContent>
                    <PageFooter />
                </PageContentCol1>
                <PageContentCol2>
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
                </PageContentCol2>
            </PageContent>
        );
    }
}