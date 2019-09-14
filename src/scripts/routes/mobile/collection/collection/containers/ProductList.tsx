import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Img } from '@/components/domain';
import { COLLECTION_DETAIL_URL } from '@/configs';
import { BaseComponent } from '@/domain';
import { replaceRoutePath } from '@/utilities';

const ProductListWrapper = styled.div`
    .row {
        > * {
            :nth-child(even) {
                padding-left: 0;
            }

            :nth-child(odd) {
                padding-right: 0;
            }
        }
    }

    .product-item-thumbnail {
        position: relative;
        height: 100%;
        img {
            width: 100%;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
        }
    }

    .product-item-info {
        position: absolute;
        bottom: 0;
        padding: 12px 24px;
        width: 100%;
        background-color: rgba(23,58,67, 0.8);
        color: #fff;
        transition: all .3s;
    }

    .product-item-name {
        font-weight: 700;
        font-size: 16px;
        small {
            font-weight: 400;
        }
    }

    .product-item-wrapper {
        height: 300px;
        overflow: hidden;
        position: relative;
        margin-bottom: 24px;
    }
`;

interface ProductListProps {
    readonly productType: string;
}

export class ProductList extends BaseComponent<ProductListProps> {
    public render() {
        const { products } = this.context;
        const { productType } = this.props;

        const filteredProducts = products.filter(o => o.productType === productType);

        return (
            <ProductListWrapper>
                {filteredProducts.map(product => {
                    return (
                        <div key={product.id} className="product-item-wrapper">
                            <Link
                                to={replaceRoutePath(COLLECTION_DETAIL_URL, product)}
                                className={this.classNames('product-item')}
                            >
                                <div
                                    className="product-item-thumbnail"
                                >
                                    <Img file={product.thumbnail} />
                                </div>
                                <div className="product-item-info">
                                    <div className="product-item-name">
                                        <span className="text-uppercase">{product.name}</span>
                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                            <small>by {product.by}</small>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    );
                })}
            </ProductListWrapper>
        );
    }
}
