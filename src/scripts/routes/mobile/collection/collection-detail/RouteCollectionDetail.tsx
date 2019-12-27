import { RouteInfo } from 'qoobee';
import * as React from 'react';
import styled from 'styled-components';

import { MobilePageContent, SlideUp } from '@/components';
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
} from '@/routes/desktop/collection/collection-detail/containers';
import {
    RouteCollectionDetailState
} from '@/routes/desktop/collection/collection-detail/RouteCollectionDetail';

const RouteCollectionDetailContent = styled.div`
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
        padding: 30px 0 24px 0;
    }
`;

const RouteCollectionDetailSlider = styled.div`
    background: lightgray;
    position: relative;
`;

type RouteCollectionDetailProps = AppPageProps<{ readonly productType: string; readonly slug?: string }>;

export class RouteCollectionDetail extends BasePageComponent<
    RouteCollectionDetailProps,
    RouteCollectionDetailState
    > {
    public static readonly routeInfo: RouteInfo = {
        path: COLLECTION_DETAIL_URL,
        title: 'Collection',
        exact: true,
        policies: [policies.locationAllowed]
    };

    constructor(props: RouteCollectionDetailProps) {
        super(props);

        this.state = {
        };
    }

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
            <MobilePageContent>
                <RouteCollectionDetailSlider className="mobile-content-full-screen">
                    <ProductPhotoSliderSlider
                        key={this.state.activeVariant?.id}
                        product={currentProduct}
                        activeVariant={this.state.activeVariant}
                    />
                </RouteCollectionDetailSlider>
                <RouteCollectionDetailContent>
                    <SlideUp key={currentProductIndex}>
                        <div>
                            <h2>{currentProduct.name}</h2>
                            <p>By {currentProduct.by}</p>
                            <article dangerouslySetInnerHTML={{ __html: markdownToHTML(currentProduct.content) }} />
                        </div>
                        <ProductDetails product={currentProduct} />
                        <ProductVariants
                            product={currentProduct}
                            onVariantChange={(activeVariant) => this.setState({ activeVariant })}
                        />
                        <ProductAttachments
                            product={currentProduct}
                        />
                    </SlideUp>
                </RouteCollectionDetailContent>
            </MobilePageContent>
        );
    }
}