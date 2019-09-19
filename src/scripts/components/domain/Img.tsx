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

    public readonly state = {
        loaded: false
    };

    private readonly onLoad = () => {
        this.setState({
            loaded: true
        });
    }

    public render() {
        const { file, ...rest } = this.props;
        const { loaded } = this.state;

        const imgSrc = Img.getUploadedFileSrc(file);

        return (
            <img
                {...rest}
                src={imgSrc}
                onLoad={this.onLoad}
                style={{ opacity: loaded ? 1 : 0 }}
            />
        );
    }
}