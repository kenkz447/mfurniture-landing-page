import * as React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { HOME_URL } from '@/configs';
import { BaseComponent } from '@/domain';

const MobilePageMenuWrapper = styled.div`
    min-height: 100vh;
    height: 100vh;
    overflow: auto;
    transition: all .5s;
    width: 260px;
    position: fixed;
    padding: 64px 36px 24px 0;
    background-image: url("/static/assets/dealers.jpg");
    background-position: center;
    background-size: cover;
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    ::before {
        content: ' ';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background: darkcyan;
        opacity:.3;
    }
    a {
        color: #fff!important;
        font-weight: 200;
        &.active {
            font-weight: 700;
        }
    }

    .mobile-menu {
        position: relative;
        list-style: none;
        flex-grow: 1;
        text-align: right;
        &-item {
            margin-bottom: 12px;
        }
    }

    .social-menu {
        list-style: none;
        margin: 0;
        padding: 0;
        text-align: center;
        position: relative;

        &-item {
            a {
                display: inline-block;
                width: 18px;
                height: 18px;
                line-height: 19px;
                background: black;
                color: white;
            }
        }
    }
`;

interface MobilePageMenuProps {

}

export class MobilePageMenu extends BaseComponent<MobilePageMenuProps> {
    public render() {
        const { menus, socials } = this.context;
        const mobileMenu = [...menus!.header, ...menus!.sider];

        return (
            <MobilePageMenuWrapper id="mobilePageMenu">
                <ul className="mobile-menu">
                    {mobileMenu.map(o => {
                        return (
                            <li key={o.url} className="mobile-menu-item">
                                <NavLink to={o.url} exact={o.url === HOME_URL}>{o.label}</NavLink>
                            </li>
                        );
                    })}
                </ul>
                <ul className="social-menu">
                    {socials.map(o => {
                        return (
                            <li key={o.url} className="social-menu-item">
                                <a target="_blank" href={o.url}><i className={`fa ${o.icon}`} /></a>
                            </li>
                        );
                    })}
                </ul>
            </MobilePageMenuWrapper>
        );
    }
}