import * as React from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import styled from 'styled-components';

import { Img } from '@/components/domain';
import { NEWS_DETAIL_URL } from '@/configs';
import { BaseComponent, markdownToHTML } from '@/domain';
import { formatDate, replaceRoutePath } from '@/utilities';

const BlogListWrapper = styled.div`
    color: #fff;
    .blogs-item-wrapper {
        margin-bottom: 15px;
    }
    .blogs-item {
        display: flex;
        height: 250px;
        background-color: var(--primary);
        transition: all .3s ease;
        cursor: pointer;
        color: #fff!important;
        &.active, &:hover {
            background-color: #142D40;
        }
    }
    .blogs-item-thumbnail {
        flex-grow: 1;
        overflow: hidden;
        img {
            position: relative;
            top:50%;
            width: 100%;
            transform: translateY(-50%);
        }
    }

    .blogs-item-info {
        width: 600px;
        min-width: 600px;

        &-block {
            height: 250px;
            display: flex;
            justify-content: center;
            flex-direction: column;
        }
        &-name {
            font-size: 22px;
        }
        &-date{
            font-weight: bold;
            letter-spacing: .3em;
        }

        @media screen and (min-width: 1600px) {
            flex-basis: 800px;
            min-width: 800px;
            max-width: 800px;
        }
    }

    .blogs-item-content-wrapper {
        background-color: var(--primary);
        overflow: hidden;
        height: 0px;
        &.active {
            height: auto;
        }
    }

    .blogs-item-content {
        column-count: 3;
        column-gap: 60px;
        text-align: justify;
    }
`;

interface BlogListProps {
    readonly currentSlug: string;
}

export class BlogList extends BaseComponent<BlogListProps> {
    public render() {
        const { blogs } = this.context;
        const { currentSlug } = this.props;

        return (
            <BlogListWrapper>
                {blogs.map(blog => {
                    return (
                        <div key={blog.id} id={blog.slug} className="blogs-item-wrapper">
                            <Link
                                to={replaceRoutePath(NEWS_DETAIL_URL, blog)}
                                className={this.classNames('blogs-item', { active: currentSlug === blog.slug })}
                            >
                                <div
                                    className="blogs-item-thumbnail"
                                >
                                    <Img file={blog.thumbnail} />
                                </div>
                                <div className="blogs-item-info">
                                    <Container>
                                        <Row>
                                            <Col xs={1} />
                                            <Col xs={4}>
                                                <div className="blogs-item-info-block text-right">
                                                    <div className="blogs-item-info-date">
                                                        {formatDate(blog.createdAt, 'DD.MM.YY')}
                                                    </div>
                                                    <div className="blogs-item-info-name">
                                                        /{blog.name}
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col xs={7}>
                                                <div className="blogs-item-info-block text-justify pr-5">
                                                    <p>{blog.brief}</p>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Container>
                                </div>
                            </Link>
                            <div
                                className={
                                    this.classNames(
                                        'blogs-item-content-wrapper',
                                        { active: currentSlug === blog.slug }
                                    )
                                }
                            >
                                <div
                                    className="blogs-item-content p-5"
                                    dangerouslySetInnerHTML={{ __html: markdownToHTML(blog.content) }}
                                />
                            </div>
                        </div>
                    );
                })}
            </BlogListWrapper>
        );
    }
}
