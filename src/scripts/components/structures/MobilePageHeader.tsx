import * as React from 'react';
import styled from 'styled-components';

const MobilePageHeaderWrapper = styled.div`
    height: 64px;
    display: flex;
    background: #fff;
    
    > * {
        height: 64px;
        line-height: 64px;
    }

    .fa {
        font-size: 18px;
    }

    .header-button {
        width: 64px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .header-logo {
        text-align: center;
        flex-grow: 1;
        img {
            height: 35px;
        }
    }
`;

interface MobilePageHeaderProps {
    readonly onMenuToggle: () => void;
}

export class MobilePageHeader extends React.PureComponent<MobilePageHeaderProps> {
    public render() {
        const { onMenuToggle } = this.props;

        return (
            <MobilePageHeaderWrapper>
                <div className="header-button" onClick={() => onMenuToggle()}>
                    <i className="fa fa-bars" />
                </div>
                <div className="header-logo">
                    <img src="/static/logo.png" alt="Logo" />
                </div>
                <div className="header-button" />
            </MobilePageHeaderWrapper>
        );
    }
}
