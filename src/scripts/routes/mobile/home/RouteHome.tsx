import { RouteInfo } from 'qoobee';
import * as React from 'react';
import styled from 'styled-components';

import { MobilePageContent, PageFooter, SlideUp } from '@/components';
import { HOME_URL } from '@/configs';
import { AppPageProps, BasePageComponent, policies } from '@/domain';

const HomeContent = styled.div`
    background: var(--primary);
    color: white;
    padding: 24px;
    h1 {
        font-size: 48px;
        margin-bottom: 24px;
    }
`;

export class RouteHome extends BasePageComponent<AppPageProps> {
    public static readonly routeInfo: RouteInfo = {
        path: HOME_URL,
        title: 'Trang chủ',
        exact: true,
        policies: [policies.locationAllowed]
    };

    public render() {

        return (
            <MobilePageContent>
                <HomeContent className="mobile-content-full-screen">
                    <SlideUp className="h-100 display-flex flex-direction-column">
                        <div>Collection No.01</div>
                        <div className="display-flex flex-direction-column justify-content-center flex-grow-1">
                            <h1 className="font-AbrilFatface">
                                Minimalistic <br />
                                Furniture
                            </h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
                                sed diam nonummy nibh euismod tincidunt ut laoreet 
                                dolore magna aliquam erat
                            </p>
                        </div>
                    </SlideUp>
                </HomeContent>
            </MobilePageContent>
        );
    }
}