import * as React from 'react';
import styled from 'styled-components';

const MobilePageWrapperDiv = styled.div`
    min-height: 100vh;
    overflow: auto;
    transition: all .5s;
    position: relative;
    background: #fff;
    display: flex;
    flex-direction: column;
`;

interface MobilePageWrapperProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
}

export class MobilePageWrapper extends React.PureComponent<MobilePageWrapperProps> {
    public static readonly defaultProps = {
        id: 'mobilePageWrapper'
    };

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