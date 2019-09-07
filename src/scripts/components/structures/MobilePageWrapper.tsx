import * as React from 'react';
import styled from 'styled-components';

const MobilePageWrapperDiv = styled.div`
    min-height: 100vh;
    height: 100vh;
    overflow: auto;
    transition: all .5s;
    position: relative;
    background: #fff;
`;

interface MobilePageWrapperProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
}

export class MobilePageWrapper extends React.PureComponent<MobilePageWrapperProps> {
    public static readonly defaultProps = {
        id: 'mobilePageWrapper'
    };

    public componentDidMount() {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    }

    public render() {
        const { ...rest } = this.props;

        return (
            <MobilePageWrapperDiv
                {...rest}
            >
                {this.props.children}
            </MobilePageWrapperDiv>
        );
    }
}