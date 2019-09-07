import * as React from 'react';
import styled from 'styled-components';

import { SlideUp } from '@/components';
import { BaseComponent } from '@/domain';
import { Dealer } from '@/restful';

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
    readonly city: Dealer['city'];
    readonly cities: Dealer['city'][];
}

export class Dealers extends BaseComponent<DealersProps, DealersState> {

    constructor(props: DealersProps) {
        super(props);

        this.state = {
            city: 'HCM',
            cities: ['HCM', 'DANANG', 'HANOI']
        };
    }

    public render() {
        const { dealers } = this.context;
        const { city, cities } = this.state;

        const dealersByCity = dealers.filter(o => o.city === city);

        return (
            <DealersWrapper>
                <div className="dealers-cities">
                    {cities.map(o => {
                        return (
                            <div
                                key={o}
                                className={this.classNames('dealers-city', { active: o === city })}
                                onClick={() => this.setState({ city: o })}
                            >
                                {o}
                            </div>
                        );
                    })}
                </div>
                <div className="dealers-list pt-5">
                    <SlideUp key={city}>

                        {dealersByCity.map(dealer => {
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
