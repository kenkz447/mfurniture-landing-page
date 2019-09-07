import { RouteInfo } from 'qoobee';
import * as React from 'react';
import { Redirect } from 'react-router';
import styled from 'styled-components';

import {
    PageContent,
    PageContentCol1,
    PageContentCol2,
    PageFooter,
    PageHeader,
    SlideUp
} from '@/components';
import { COLLECTION_URL } from '@/configs';
import {
    AppPageProps,
    BasePageComponent,
    markdownToHTML,
    policies
} from '@/domain';
import { replaceRoutePath } from '@/utilities';

import { FeatureProductSlider } from '../home/containers';

const RouteCollectionContent = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    overflow: auto;
    position: relative;
    scrollbar-width: none;
    ::-webkit-scrollbar {
        display: none;
    }
    h1 {
        font-size: 70px;
        margin-bottom: 24px;
        text-align: left;
    }
    h2 {
        font-size: 15px;
        font-weight: 500;
        margin-bottom: 1em;
        text-transform: uppercase;
    }

    article {
        padding: 0 15%;
        margin: 30px 0;
        text-align: justify;
    }
`;

const RouteCollectionSlider = styled.div`
    background: lightgray;
    height: inherit;
    min-height: inherit;
    max-height: inherit;
    position: relative;
    ::before, ::after {
        content: ' ';
        position: absolute;
        width: 100%;
        left: 0;
        background-color: #fff;
        z-index: 999;
        
    }
    ::before {
        top: 0;
        height: 120px;
    }
    ::after {
        bottom: 0;
        height: 98px;
    }
`;

const Blackbar = styled.div`
    position: absolute;
    top: 120px;
    left: 0;
    background : #0C0203;
    width : 100px;
    height : 7px;
    transform: translateX(-50%);
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
            <PageContent>
                <PageContentCol1>
                    <PageHeader />
                    <RouteCollectionContent>
                        <SlideUp key={currentProductIndex}>
                            <h2 className="mt-5">{currentProduct.name}</h2>
                            <p>By {currentProduct.by}</p>
                            <article dangerouslySetInnerHTML={{ __html: markdownToHTML(currentProduct.content) }} />
                        </SlideUp>
                    </RouteCollectionContent>
                    <PageFooter />
                </PageContentCol1>
                <PageContentCol2>
                    <RouteCollectionSlider>
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
                        <Blackbar />
                    </RouteCollectionSlider>
                </PageContentCol2>
            </PageContent>
        );
    }
}