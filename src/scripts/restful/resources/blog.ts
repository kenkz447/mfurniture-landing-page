import { Resource, ResourceType } from 'react-restful';

import { UploadedFile } from './uploadedFile';

export interface Blog {
    readonly id: string;
    readonly name: string;
    readonly slug: string;
    readonly brief: string;
    readonly content: string;
    readonly thumbnail: UploadedFile;
    readonly createdAt: string;
}

export const blogResourceType = new ResourceType<Blog>({
    name: nameof<Blog>()
});

export const blogResources = {
    findAll: new Resource<Blog, Blog[]>({
        resourceType: blogResourceType,
        url: '/blogs'
    }),
    findOne: new Resource<Blog, Blog[]>({
        resourceType: blogResourceType,
        url: '/blogs/:id'
    }),
    count: new Resource<number>({
        url: '/blogs'
    }),
};