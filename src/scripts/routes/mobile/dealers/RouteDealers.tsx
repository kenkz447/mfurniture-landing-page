import { RouteInfo } from 'qoobee';
import * as React from 'react';
import styled from 'styled-components';

import { MobilePageContent, SlideUp } from '@/components';
import { DEALERS_URL } from '@/configs';
import { AppPageProps, BasePageComponent, policies } from '@/domain';
import { Dealers } from '@/routes/desktop/dealers/containers';

const DealersContent = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    background-image: url("/static/assets/dealers.jpg");
    background-size: cover;
    background-position: center;
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
        return (
            <MobilePageContent>
                <DealersContent className="mobile-content-full-screen mb-5" />
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