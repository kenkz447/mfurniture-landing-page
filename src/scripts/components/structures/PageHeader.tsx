import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { HOME_URL } from '@/configs';
import { BaseComponent } from '@/domain';

const PageHeaderWrapper = styled.header`
    height: 120px;
    min-height: 120px;
    
    display: flex;
    align-items: flex-end;
    padding-bottom: 15px;

    #headerMenu {
        flex-grow: 1;
        padding-left: 5%;
        ul {
            padding: 0;
        }
    }
    .header-menu {
        margin-bottom: 0;
    }
    
    .header-menu-item {
        display: inline-block;
        margin-right: 30px;
        height: 43px;
        line-height: 43px;
        a {
            color: black;
        }
    }

    .logo {
        width: 150px;
        margin-right: 50px;
        img {
            max-width: 100%;
        }
    }
`;

interface PageHeaderProps {

}

export class PageHeader extends BaseComponent<PageHeaderProps> {
    public render() {
        const { menus } = this.context;

        return (
            <PageHeaderWrapper id="pageHeader">
                <div className="logo">
                    <Link to="/">
                        <img src="/static/logo.png" alt="Logo" />
                    </Link>
                </div>
                <div id="headerMenu">
                    <ul className="header-menu">
                        {menus!.header.map(o => {
                            return (
                                <li key={o.url} className="header-menu-item">
                                    <NavLink to={o.url} exact={o.url === HOME_URL}>{o.label}</NavLink>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </PageHeaderWrapper>
        );
    }
}
