import * as React from 'react';
import styled from 'styled-components';

import { Img } from '@/components/domain';
import { Product } from '@/restful';

const _ProductAttachments = styled.div`
    margin-bottom: 24px;
`;

interface ProductAttachmentsState {
}

interface ProductAttachmentsProps {
    readonly product: Product;
}

export class ProductAttachments extends React.PureComponent<ProductAttachmentsProps, ProductAttachmentsState> {
    constructor(props: ProductAttachmentsProps) {
        super(props);
    }

    public render() {
        const { product } = this.props;
        if (product.attachments.length === 0) {
            return null;
        }

        return (
            <_ProductAttachments>
                <strong >
                    Attachments
                </strong>
                <div className="Attachments">
                    {product.attachments.map(o => {
                        return (
                            <div key={o.url} className="Attachment">
                                <a href={Img.getUploadedFileSrc(o.url)}>
                                    {o.name}
                               </a>
                            </div>
                        );
                    })}
                </div>
            </_ProductAttachments>
        );
    }
}