import { RouteInfo } from 'qoobee';
import * as React from 'react';
import { Redirect } from 'react-router';
import styled from 'styled-components';

import { MobilePageContent, SlideUp } from '@/components';
import { COLLECTION_URL } from '@/configs';
import {
    AppPageProps,
    BasePageComponent,
    markdownToHTML,
    policies
} from '@/domain';
import { FeatureProductSlider } from '@/routes/desktop/home/containers';
import { replaceRoutePath } from '@/utilities';

const RouteCollectionContent = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    overflow: auto;
    position: relative;
    scrollbar-width: none;
    padding: 24px;
    min-height: 100vh;

    h1 {
        font-size: 48px;
        margin-bottom: 24px;
        text-align: left;
        font-family: 'Abril Fatface', cursive;
    }
    h2 {
        font-size: 15px;
        font-weight: 700;
        margin-top: 0;
        margin-bottom: .5em;
        text-transform: uppercase;
    }

    article {
        text-align: justify;
    }
`;

const RouteCollectionSlider = styled.div`
    background: lightgray;
    position: relative;
`;

type RouteCollectionProps = AppPageProps<{ readonly productType: string; readonly slug?: string }>;

export class RouteCollection extends BasePageComponent<RouteCollectionProps> {
    public static readonly routeInfo: RouteInfo = {
        path: COLLECTION_URL,
        title: 'Collection',
        exact: true,
        policies: [policies.locationAllowed]
    };

    public render() {
        const { products, history } = this.context;
        const { match: { params } } = this.props;

        const productsByType = products.filter(o => o.productType === params.productType);

        const currentProductIndex = productsByType.findIndex(o => o.slug === params.slug);
        const currentProduct = productsByType[currentProductIndex];

        if (!currentProduct) {
            const defaultProduct = productsByType[0];

            if (!defaultProduct) {
                return 'No data found!';
            }

            return <Redirect to={replaceRoutePath(COLLECTION_URL, defaultProduct)} />;
        }

        return (
            <MobilePageContent>
                <RouteCollectionSlider className="mobile-content-full-screen">
                    <FeatureProductSlider
                        products={productsByType}
                        interval={false}
                        currentIndex={currentProductIndex}
                        onChange={(index) => {
                            const nextProduct = productsByType[index];
                            if (!nextProduct) {
                                return;
                            }

                            history.replace(
                                replaceRoutePath(COLLECTION_URL, nextProduct)
                            );
                        }}
                    />
                </RouteCollectionSlider>
                <RouteCollectionContent>
                    <SlideUp key={currentProductIndex}>
                        <h2>{currentProduct.name}</h2>
                        <p>By {currentProduct.by}</p>
                        <article dangerouslySetInnerHTML={{ __html: markdownToHTML(currentProduct.content) }} />
                    </SlideUp>
                </RouteCollectionContent>
            </MobilePageContent>
        );
    }
}