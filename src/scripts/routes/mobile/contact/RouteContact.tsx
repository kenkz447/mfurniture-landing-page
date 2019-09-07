import { RouteInfo } from 'qoobee';
import * as React from 'react';
import styled from 'styled-components';

import { MobilePageContent, SlideUp } from '@/components';
import { CONTACT_URL } from '@/configs';
import { AppPageProps, BasePageComponent, policies } from '@/domain';

const ContactContent = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    background-image: url("/static/assets/contact.jpg");
    background-size: cover;
    background-position: center;
`;

const ContactSlider = styled.div`
    height: 100vh;
    min-height: inherit;
    max-height: inherit;
    padding: 24px;
    text-align: center;
    
    p {
        line-height: 2.3em;
    }
`;

export class RouteContact extends BasePageComponent<AppPageProps> {
    public static readonly routeInfo: RouteInfo = {
        path: CONTACT_URL,
        title: 'Contact',
        exact: true,
        policies: [policies.locationAllowed]
    };

    public render() {
        return (
            <MobilePageContent>
                <ContactContent className="mobile-content-full-screen mb-5" />
                <ContactSlider>
                    <SlideUp className="h-100 display-flex flex-direction-column justify-content-center">
                        <h1 className="text-center mb-5">
                            CONTACT
                            </h1>
                        <p className="mb-5">
                            HO CHI MINH <br />
                            M furniture company <br />
                            189/8, Le Hong Phong <br />
                            Tan Phuoc, Tan Binh Ward <br />
                            Di An, Binh Duong <br />
                            +84 0274 368 7000 <br />
                            info@mfurniture.vn
                            </p>
                        <p className="mb-5">
                            DA NANG <br />
                            M furniture store <br />
                            143 Phan Van Dinh <br />
                            Hoa Khanh Bac Ward, <br />
                            Lien Chieu, Da Nang <br />
                            +84 0274 368 7000 <br />
                            info@mfurniture.vn
                            </p>
                    </SlideUp>
                </ContactSlider>
            </MobilePageContent>
        );
    }
}