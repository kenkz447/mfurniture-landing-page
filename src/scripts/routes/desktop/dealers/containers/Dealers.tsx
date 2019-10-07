import * as React from 'react';
import styled from 'styled-components';

import { SlideUp } from '@/components';
import { BaseComponent } from '@/domain';
import { DealerLocation } from '@/restful';

const DealersWrapper = styled.div`
    .dealers-cities {
        display: flex;
        margin-bottom: 25px;
    }
    .dealers-city {
        flex-grow: 1;
        font-size: 25px;
        cursor: pointer;
        &.active {
            ::after {
                content: ' ';
                background : #0C0203;
                background : rgba(12, 2, 3, 1);
                width : 70px;
                height : 3px;
                display: block;
            }
        }
    }

    .dealers-list {
        display: flex;
        flex-direction: column;
        background-image: url("/static/assets/dealers-background.png");
        background-size: cover;
        background-position: center;
        text-align: center;
        color: #fff;
        min-height: 428px;
    }

    @media screen and (max-width: 1200px) {
        .dealers-city {
            font-size: 20px;
        }

        .dealers-list {
            font-weight: 400;
            min-height: 459px;
        }
    }
`;

interface DealersProps {
}

interface DealersState {
    readonly currentLocation?: DealerLocation;
}

export class Dealers extends BaseComponent<DealersProps, DealersState> {

    constructor(props: DealersProps) {
        super(props);

        this.state = {
        };
    }

    public render() {
        const { dealerLocaltions } = this.context;
        const { currentLocation } = this.state;

        if (!currentLocation) {
            return null;
        }

        return (
            <DealersWrapper>
                <div className="dealers-cities">
                    {dealerLocaltions.map(o => {
                        return (
                            <div
                                key={o.id}
                                className={this.classNames('dealers-city', { active: o === currentLocation })}
                                onClick={() => this.setState({ currentLocation: o })}
                            >
                                {o}
                            </div>
                        );
                    })}
                </div>
                <div className="dealers-list pt-5">
                    <SlideUp key={currentLocation.id}>
                        {currentLocation.dealers.map(dealer => {
                            return (
                                <div key={dealer.name} className="mb-5">
                                    <div className="h5 mb-3">{dealer.name}</div>
                                    <div>{dealer.address}</div>
                                    <div>{dealer.email}</div>
                                    <div>{dealer.tel}</div>
                                </div>
                            );
                        })}
                    </SlideUp>
                </div>
            </DealersWrapper>
        );
    }
}
