import { RouteInfo } from 'qoobee';
import * as React from 'react';
import styled from 'styled-components';

import { MobilePageContent, SlideUp } from '@/components';
import { HOME_URL } from '@/configs';
import { AppPageProps, BasePageComponent, policies } from '@/domain';

import { FeatureProductSlider } from './containers';

const HomeSlider = styled.div`
    background: lightgray;
    width: 100%;
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
            <MobilePageContent>

                <HomeSlider className="mobile-content-full-screen">
                    <FeatureProductSlider
                        products={featureProducts}
                        interval={false}
                    />
                </HomeSlider>
            </MobilePageContent>
        );
    }
}