import * as React from 'react';
import styled from 'styled-components';

import { Img } from '@/components/domain';
import { Product, ProductVariant } from '@/restful';

const _ProductVariants = styled.div`
    margin-bottom: 24px;
    
    .variants {
        display: flex;
        margin-bottom: 15px;
    }

    .variant {
        margin-right: 9px;
    }

    .variant-image {
        width: 54px;
        height: 54px;
        overflow: hidden;
        border: 2px solid transparent;
        &.active {
            border-color: black;
        }
        img {
            max-height: 100%;
        }
    }
`;

interface ProductVariantsState {
    readonly activeVariant: ProductVariant;
}

interface ProductVariantsProps {
    readonly product: Product;
}

export class ProductVariants extends React.PureComponent<ProductVariantsProps, ProductVariantsState> {
    constructor(props: ProductVariantsProps) {
        super(props);

        this.state = {
            activeVariant: props.product.productVariants[0]
        };
    }

    public render() {
        const { product } = this.props;
        const { activeVariant } = this.state;

        return (
            <_ProductVariants>
                <strong className="font-size-large">
                    {activeVariant.name}
                </strong>
                <div className="variants">
                    {product.productVariants.map(o => {
                        return (
                            <div key={o.id} className="variant">
                                <div
                                    className={activeVariant === o ? 'variant-image active' : 'variant-image'}
                                    onClick={() => {
                                        this.setState({
                                            activeVariant: o
                                        });
                                    }}
                                >
                                    <Img file={o.materialPrimary.texture} />
                                </div>
                                <small>
                                    {o.materialPrimary.name}
                                </small>
                            </div>
                        );
                    })}
                </div>
                <div>
                    <strong className="font-size-large">
                        {activeVariant.materialSecondariesLabel}
                    </strong>
                    <div className="d-flex">
                        {activeVariant.materialSecondaries.map(o => {
                            return (
                                <div key={o.id} className="variant">
                                    <div
                                        className="variant-image"
                                    >
                                        <Img file={o.texture} />
                                    </div>
                                    <small>
                                        {o.name}
                                    </small>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </_ProductVariants>
        );
    }
}