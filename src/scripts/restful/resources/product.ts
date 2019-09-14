import { Resource, ResourceType } from 'react-restful';

import { UploadedFile } from './uploadedFile';

export interface Product {
    readonly id: number;
    readonly priority: number;
    readonly slug: string;
    readonly name: string;
    readonly style: string;
    readonly by: string;
    readonly content: string;
    readonly thumbnail: UploadedFile;
    readonly productType: 'sofa' | 'chair' | 'table';
    readonly isFeature: boolean;
    readonly photos: UploadedFile[];
}

export const productResourceType = new ResourceType<Product>({
    name: nameof<Product>()
});

export const productResources = {
    findAll: new Resource<Product, Product[]>({
        resourceType: productResourceType,
        url: '/products'
    }),
    findOne: new Resource<Product, Product[]>({
        resourceType: productResourceType,
        url: '/products/:id'
    }),
    count: new Resource<number>({
        url: '/products'
    }),
};