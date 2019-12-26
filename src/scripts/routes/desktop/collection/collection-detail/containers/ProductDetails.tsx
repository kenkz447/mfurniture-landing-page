import isEmpty from 'lodash/isEmpty';
import map from 'lodash/map';
import * as React from 'react';
import styled from 'styled-components';

import { Product } from '@/restful';

const _ProductDetails = styled.table`
    margin-bottom: 24px;

    .product-details {
        &-key {
            min-width: 70px;
            display: inline-block;
            text-transform: capitalize;
        }
        &-value {
            display: inline-block;
        }
    }
`;

interface ProductDetailsState {
}

interface ProductDetailsProps {
    readonly product: Product;
}

export class ProductDetails extends React.PureComponent<ProductDetailsProps, ProductDetailsState> {
    constructor(props: ProductDetailsProps) {
        super(props);
    }

    public render() {
        const { product } = this.props;

        if (isEmpty(product?.details)) {
            return null;
        }

        return (
            <_ProductDetails>
                {
                    map(product.details, (value, key) => {
                        return (
                            <tr key={key}>
                                <td className="product-details-key">{key}: </td>
                                <td className="product-details-value">{value}</td>
                            </tr>
                        );
                    })
                }
            </_ProductDetails>
        );
    }
}