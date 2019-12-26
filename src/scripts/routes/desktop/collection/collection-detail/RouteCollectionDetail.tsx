import { RouteInfo } from 'qoobee';
import * as React from 'react';
import styled from 'styled-components';

import {
    PageContent,
    PageContentCol1,
    PageContentCol2,
    PageFooter,
    PageHeader,
    SlideUp
} from '@/components';
import { COLLECTION_DETAIL_URL } from '@/configs';
import {
    AppPageProps,
    BasePageComponent,
    markdownToHTML,
    policies
} from '@/domain';

import {
    ProductAttachments,
    ProductDetails,
    ProductPhotoSliderSlider,
    ProductVariants
} from './containers';

const RouteCollectionDetailContent = styled.div`
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
        margin-bottom: .1em;
        text-transform: uppercase;
    }

    article {
        margin: 30px 0 24px 0;
        text-align: justify;
    }

    .product-content-meta {
        width: 200px;
        min-width: 200px;
        max-width: 200px;
    }

    .product-content-detail {
        padding: 0 15% 0 5%;
    }
`;

const RouteCollectionDetailSlider = styled.div`
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

type RouteCollectionDetailProps = AppPageProps<{ readonly productType: string; readonly slug?: string }>;

export class RouteCollectionDetail extends BasePageComponent<RouteCollectionDetailProps> {
    public static readonly routeInfo: RouteInfo = {
        path: COLLECTION_DETAIL_URL,
        title: 'Collection',
        exact: true,
        policies: [policies.locationAllowed]
    };

    public render() {
        const { products } = this.context;
        const { match: { params } } = this.props;

        const productsByType = products.filter(o => o.productType === params.productType);

        const currentProductIndex = productsByType.findIndex(o => o.slug === params.slug);
        const currentProduct = productsByType[currentProductIndex];

        if (!currentProduct) {
            const defaultProduct = productsByType[0];

            if (!defaultProduct) {
                return 'No data found!';
            }
        }

        return (
            <PageContent>
                <PageContentCol1>
                    <PageHeader />
                    <RouteCollectionDetailContent>
                        <SlideUp key={currentProductIndex} className="d-flex">
                            <div className="product-content-meta">
                                <h2 className="mt-5">{currentProduct.name}</h2>
                                <p>By {currentProduct.by}</p>
                                <ProductAttachments product={currentProduct} />
                            </div>
                            <div className="product-content-detail">
                                <article dangerouslySetInnerHTML={{ __html: markdownToHTML(currentProduct.content) }} />
                                <ProductDetails product={currentProduct} />
                                <ProductVariants product={currentProduct} />
                            </div>
                        </SlideUp>
                    </RouteCollectionDetailContent>
                    <PageFooter />
                </PageContentCol1>
                <PageContentCol2>
                    <RouteCollectionDetailSlider>
                        <ProductPhotoSliderSlider
                            product={currentProduct}
                        />
                        <Blackbar />
                    </RouteCollectionDetailSlider>
                </PageContentCol2>
            </PageContent>
        );
    }
}