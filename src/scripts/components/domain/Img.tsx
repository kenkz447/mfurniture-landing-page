import * as React from 'react';

import { UploadedFile } from '@/restful';

interface ImgProps extends React.ImgHTMLAttributes<{}> {
    readonly file?: UploadedFile | string;
}

export class Img extends React.Component<ImgProps> {

    public static readonly getUploadedFileSrc = (file?: UploadedFile | string) => {
        if (!file) {
            return '';
        }

        const url = typeof file === 'string' ? file : file.url;
        
        return FILE_HOST + url;
    }

    public render() {
        const { file, ...rest } = this.props;
        const imgSrc = Img.getUploadedFileSrc(file);

        return <img {...rest} src={imgSrc} />;
    }
}