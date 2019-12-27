import * as React from 'react';
import { Carousel, CarouselControl, CarouselItem } from 'reactstrap';
import styled from 'styled-components';

import { Img } from '@/components/domain';
import { Product, ProductVariant, UploadedFile } from '@/restful';

const ProductPhotoSliderSliderWrapper = styled.div`
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

interface ProductPhotoSliderSliderProps {
    readonly product: Product;
    readonly activeVariant?: ProductVariant;
    readonly onChange?: (index: number) => void;
}

interface ProductPhotoSliderSliderState {
    readonly activeIndex: number;
    readonly photos: UploadedFile[];
}

export class ProductPhotoSliderSlider extends React.PureComponent<
    ProductPhotoSliderSliderProps,
    ProductPhotoSliderSliderState> {
    private _animating = false;

    constructor(props: ProductPhotoSliderSliderProps) {
        super(props);
        const { product, activeVariant } = props;
        const photos = activeVariant?.photos?.length
            ? activeVariant?.photos
            : product.photos;
        
        this.state = {
            activeIndex: 0,
            photos
        };
    }

    private readonly onExiting = () => {
        this._animating = true;
    }

    private readonly onExited = () => {
        this._animating = false;
    }

    private readonly next = () => {
        const { activeIndex, photos } = this.state;

        if (this._animating || activeIndex === photos.length - 1) {
            return;
        }

        const nextIndex = this.state.activeIndex === photos.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
    }

    private readonly previous = () => {
        const { product } = this.props;
        const { activeIndex, photos } = this.state;

        if (this._animating || activeIndex === 0) {
            return;
        }

        const nextIndex = this.state.activeIndex === 0 ? photos.length - 1 : activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
    }

    public componentDidUpdate(prevProps: ProductPhotoSliderSliderProps, prevState: ProductPhotoSliderSliderState) {
        const { onChange } = this.props;
        const { activeIndex } = this.state;

        if (activeIndex !== prevState.activeIndex) {
            if (onChange) {
                onChange(activeIndex);
            }
        }
    }

    public render() {
        const { product } = this.props;
        const { activeIndex, photos } = this.state;

        const displayIndex = activeIndex + 1;
        const slides = photos.map((photo) => {
            return (
                <CarouselItem
                    onExiting={this.onExiting}
                    onExited={this.onExited}
                    key={photo.url}
                >
                    <Img className="carousel-item-img" file={photo} />
                </CarouselItem>
            );
        });

        return (
            <ProductPhotoSliderSliderWrapper>
                <Carousel
                    key={photos.length}
                    activeIndex={activeIndex}
                    next={this.next}
                    previous={this.previous}
                    interval={false}
                >
                    {slides}
                    <CarouselControl
                        direction="prev"
                        directionText="Previous"
                        onClickHandler={this.previous}
                        className={displayIndex === 1 ? 'disabled' : ''}
                    />
                    <CarouselControl
                        direction="next"
                        directionText="Next"
                        onClickHandler={this.next}
                        className={displayIndex === photos.length ? 'disabled' : ''}
                    />
                </Carousel>
                <div className="carousel-caption">
                    <h3>{displayIndex > 9 ? String(displayIndex) : '0' + displayIndex}</h3>
                    <p>/{product.style}</p>
                </div>
            </ProductPhotoSliderSliderWrapper>
        );
    }
}
