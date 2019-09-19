import * as React from 'react';
import { Col, Container, Row } from 'reactstrap';
import styled from 'styled-components';

import { BaseComponent } from '@/domain';

const PageFooterWrapper = styled.footer`
    height: 98px;
    min-height: 98px;
    background: black;
    display: flex;
    padding: 0 30px 0 60px;
    align-items: center;
    color: #fff;
    .footer-copy-right {
        flex-grow: 1;
    }
    .footer-contact-info {
        max-width: 470px;
        line-height: 2.5em;
        font-size: 10px;
        i {
            font-size: 1.2em;
            display: inline-block;
            margin-right: 6px;
        }
    }

    @media screen and (max-width: 1200px) {
        height: auto;
        min-height: 236px;
        flex-direction: column;
        padding: 24px 24px 64px 24px;
        align-items: unset;

        .row > * {
            padding: 0;
        }

        .fa {
            display: inline-block;
            width: 10px;
        }

        .footer-copy-right {
            margin-bottom: 24px;
        }
    }
`;

interface PageFooterProps {
}

export class PageFooter extends BaseComponent<PageFooterProps> {

    public render() {
        const { settings } = this.context;

        const phoneSetting = settings.find(o => o.key === 'CONTACT_PHONE');
        const mailSetting = settings.find(o => o.key === 'CONTACT_EMAIL');
        const addressSetting = settings.find(o => o.key === 'CONTACT_ADDRESS');

        return (
            <PageFooterWrapper id="pageFooter">
                <div className="footer-copy-right">
                    &copy; Mfurniture.vn.{(new Date).getFullYear()}
                </div>
                <div className="footer-contact-info">
                    <Container>
                        <Row>
                            <Col xl={6}>
                                <i className="fa fa-mobile" />
                                <span>{phoneSetting ? phoneSetting.value : '...'}</span>
                            </Col>
                            <Col xl={6}>
                                <i className="fa fa-envelope-o" />
                                <span>{mailSetting ? mailSetting.value : '...'}</span>
                            </Col>
                            <Col xl={6}>
                                <i className="fa fa-map-marker" />
                                <span>{addressSetting ? addressSetting.value : '...'}</span>
                            </Col>
                            <Col xl={6}>
                                <i className="fa fa-globe" />
                                <span>WWW.MFURNITURE.VN</span>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </PageFooterWrapper>
        );
    }
}
