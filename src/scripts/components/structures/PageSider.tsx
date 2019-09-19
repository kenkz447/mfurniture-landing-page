import * as React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { BaseComponent } from '@/domain';

const PageSiderWrapper = styled.aside`
    width: 120px;
    min-width: 120px;
    display: flex;
    flex-direction: column;

    .search-btn {
        background: var(--primary);
        height: 120px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        font-size: 16px;
    }

    #siderMenu {
        flex-grow: 1;
        padding: 50px 0 25px 0;
        display: flex;
        flex-direction: column;
        height: inherit;
    }
    
    .sider-menu {
        list-style: none;
        text-align: center;
        margin: 0;
        padding: 0;
        line-height: 2em;
        flex-grow: 1;
    }

    .social-menu {
        list-style: none;
        text-align: center;
        margin: 0;
        padding: 0;
        &-item {
            a {
                display: inline-block;
                width: 16px;
                height: 16px;
                line-height: 17px;
                background: black;
                color: white;
            }
        }
    }
`;

interface PageSiderProps {
}

export class PageSider extends BaseComponent<PageSiderProps> {
    public render() {
        const { menus, socials } = this.context;

        return (
            <PageSiderWrapper id="pageSider">
                <div className="search-btn">
                    <i className="fa fa-search" />
                </div>
                <div id="siderMenu">
                    <ul className="sider-menu">
                        {menus!.sider.map(o => {
                            return (
                                <li key={o.url} className="sider-menu-item">
                                    <NavLink to={o.url}>{o.label}</NavLink>
                                </li>
                            );
                        })}
                    </ul>
                    <ul className="social-menu">
                        {socials.map(o => {
                            return (
                                <li key={o.url} className="social-menu-item">
                                    <NavLink to={o.url}><i className={`fa ${o.icon}`} /></NavLink>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </PageSiderWrapper>
        );
    }
}
