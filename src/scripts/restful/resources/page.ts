import { Resource, ResourceType } from 'react-restful';

export interface Page {
    readonly title: string;
    readonly slug: string;
    readonly content: string;
}

export const pageResourceType = new ResourceType<Page>({
    name: nameof<Page>()
});

export const pageResources = {
    findAll: new Resource<Page, Page[]>({
        resourceType: pageResourceType,
        url: '/pages'
    }),
    findOne: new Resource<Page, Page[]>({
        resourceType: pageResourceType,
        url: '/pages/:id'
    }),
    count: new Resource<number>({
        url: '/pages'
    }),
};