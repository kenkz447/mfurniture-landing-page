import { RouteInfo } from 'qoobee';
import * as React from 'react';
import { Redirect } from 'react-router';
import styled from 'styled-components';

import { MobilePageContent, SlideUp } from '@/components';
import { Img } from '@/components/domain';
import { DEALERS_URL } from '@/configs';
import { AppPageProps, BasePageComponent, policies } from '@/domain';
import { Dealers } from '@/routes/desktop/dealers/containers';

const DealersContent = styled.div`
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

const DealersSlider = styled.div`
    min-height: 100vh;
    max-height: inherit;
    padding: 24px 24px 0 24px;
    text-align: justify;
    
    h1 {
        font-size: 55px;
    }

    .dealers-list {
        margin: 0 -24px;
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
            <MobilePageContent>
                <DealersContent className="mobile-content-full-screen mb-5">
                    <Img
                        file={dealersPage.cover}
                        className="cover"
                        alt="dealers cover photo"
                    />
                </DealersContent>
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
            </MobilePageContent>
        );
    }
}