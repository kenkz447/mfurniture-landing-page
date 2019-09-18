import * as React from 'react';
import { Link } from 'react-router-dom';
import {
    Carousel,
    CarouselCaption,
    CarouselControl,
    CarouselItem
} from 'reactstrap';
import styled from 'styled-components';

import { SlideUp } from '@/components';
import { Img } from '@/components/domain';
import { COLLECTION_DETAIL_URL } from '@/configs';
import { BaseComponent, markdownToHTML } from '@/domain';
import { Product } from '@/restful';
import { replaceRoutePath } from '@/utilities';

const HomeContent = styled.div`
    background: var(--primary);
    color: white;
    padding: 24px;
    height: 100%;

    h1 {
        font-size: 48px;
        margin-bottom: 24px;
        font-family: 'Abril Fatface', cursive;
    }

    .home-cover {
        position: absolute;
        height: 100%;
        top: 0;
        left: 0;
        img {
            position: relative;
            height: 100%;
            left: 50%;
            transform: translateX(-50%);
        }
    }
`;

const FeatureProductSliderWrapper = styled.div`
    height: inherit;
    min-height: inherit;
    max-height: inherit;
    max-width: inherit;
    .carousel, .carousel-inner, .carousel-item {
        height: inherit;
        min-height: inherit;
        max-height: inherit;
        max-width: inherit;
    }

    .carousel-item-img {
        height: 100vh;
        max-height: inherit;
    }

    .carousel-caption {
        right: unset;
        bottom: unset;
        text-align: unset;
        top: 20%;
        display: block!important;

        > * {
            font-weight: bold;
            font-size: 22px;
            letter-spacing: .15em;
        }
        h3 {
            letter-spacing: .3em;
        }
    }

    .carousel-control-prev, .carousel-control-next {
        height: 35px;
        width: 35px;
        top: unset;
        bottom: 17%;
        opacity: 1;
        cursor: pointer;
    }

    .carousel-control-prev {
        left: 70%;
        &-icon {
            background-image: url("/static/assets/prev.png");
            height: 30px;
            width: 15px;
        }
    }

    .carousel-control-next {
        right: 17%;
        &-icon {
            background-image: url("/static/assets/next.png");
            height: 30px;
            width: 15px;
        }
    }

    @media screen and (max-width: 1200px) {
        .carousel-caption {
            left: 24px;
        }

        .carousel-control-prev, .carousel-control-next {
            bottom: 5%;
        }

        
        .carousel-control-prev {
            left: 70%;
        }

        .carousel-control-next {
            right: 10%;
        }
    }
`;

interface FeatureProductSliderProps {
    readonly products: Product[];
    readonly onChange?: (index: number) => void;
    readonly interval?: number | false;
    readonly currentIndex?: number;
}

interface FeatureProductSliderState {
    readonly activeIndex: number;
}

export class FeatureProductSlider extends BaseComponent<FeatureProductSliderProps, FeatureProductSliderState> {
    private _animating = false;

    constructor(props: FeatureProductSliderProps) {
        super(props);

        this.state = {
            activeIndex: props.currentIndex || 0
        };
    }

    private readonly onExiting = () => {
        this._animating = true;
    }

    private readonly onExited = () => {
        this._animating = false;
    }

    private readonly next = () => {
        const { products } = this.props;
        const { activeIndex } = this.state;

        if (this._animating || activeIndex === products.length - 1) {
            return;
        }

        const nextIndex = this.state.activeIndex === products.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
    }

    private readonly previous = () => {
        const { products } = this.props;
        const { activeIndex } = this.state;

        if (this._animating || activeIndex === 0) {
            return;
        }

        const nextIndex = this.state.activeIndex === 0 ? products.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
    }

    public componentDidUpdate(prevProps: FeatureProductSliderProps, prevState: FeatureProductSliderState) {
        const { onChange } = this.props;
        const { activeIndex } = this.state;

        if (activeIndex !== prevState.activeIndex) {
            if (onChange) {
                onChange(activeIndex);
            }
        }
    }

    public render() {
        const { pages } = this.context;
        const homePage = pages.find(o => o.slug === 'home');

        const { products, interval } = this.props;
        const { activeIndex } = this.state;

        const slides = products.map((product, index) => {
            if (!product.thumbnail) {
                return null;
            }

            const displayIndex = index + 1;

            return (
                <CarouselItem
                    onExiting={this.onExiting}
                    onExited={this.onExited}
                    key={product.thumbnail.url}
                >
                    <Img className="carousel-item-img" file={product.thumbnail} />
                    <Link to={replaceRoutePath(COLLECTION_DETAIL_URL, product)}>
                        <CarouselCaption
                            captionHeader={index > 9 ? String(displayIndex) : '0' + displayIndex}
                            captionText={'/' + product.style}
                        />
                    </Link>
                </CarouselItem>
            );
        });


        if (homePage) {
            slides.unshift(
                <CarouselItem
                    onExiting={this.onExiting}
                    onExited={this.onExited}
                    key="home"
                >
                    <HomeContent>
                        <div className="home-cover">
                            <Img file={homePage.cover} />
                        </div>
                        <SlideUp className="h-100 display-flex flex-direction-column">
                            <div>Collection No.01</div>
                            <div className="display-flex flex-direction-column justify-content-center flex-grow-1">
                                <div dangerouslySetInnerHTML={{ __html: markdownToHTML(homePage.content) }} />
                            </div>
                        </SlideUp>
                    </HomeContent>
                </CarouselItem>
            );
        }

        return (
            <FeatureProductSliderWrapper>
                <Carousel
                    activeIndex={activeIndex}
                    next={this.next}
                    previous={this.previous}
                    interval={interval}
                >

                    {slides}
                    <CarouselControl
                        direction="prev"
                        directionText="Previous"
                        onClickHandler={this.previous}
                        className={activeIndex === 0 ? 'disabled' : ''}
                    />
                    <CarouselControl
                        direction="next"
                        directionText="Next"
                        onClickHandler={this.next}
                        className={activeIndex === products.length - 1 ? 'disabled' : ''}
                    />
                </Carousel>
            </FeatureProductSliderWrapper>
        );
    }
}
