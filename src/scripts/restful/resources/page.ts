import { Resource, ResourceType } from 'react-restful';

import { UploadedFile } from './uploadedFile';

export interface Page {
    readonly title: string;
    readonly slug: string;
    readonly content: string;
    readonly cover?: UploadedFile;
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