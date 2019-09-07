import { RouteInfo } from 'qoobee';
import * as React from 'react';
import styled from 'styled-components';

import { MobilePageContent, SlideUp } from '@/components';
import { NEWS_DETAIL_URL } from '@/configs';
import { AppPageProps, BasePageComponent, policies } from '@/domain';

import { BlogList } from './containers';

const BlogsContent = styled.div`
    flex-grow: 1;
`;

type RouteBlogsProps = AppPageProps<{ readonly slug: string }>;

export class RouteBlogs extends BasePageComponent<RouteBlogsProps> {
    public static readonly routeInfo: RouteInfo = {
        path: NEWS_DETAIL_URL,
        title: 'News',
        exact: true,
        policies: [policies.locationAllowed]
    };

    public render() {
        const { match: { params } } = this.props;

        return (
            <MobilePageContent>
                <BlogsContent>
                    <SlideUp>
                        <BlogList currentSlug={params.slug} />
                    </SlideUp>
                </BlogsContent>
            </MobilePageContent>
        );
    }
}