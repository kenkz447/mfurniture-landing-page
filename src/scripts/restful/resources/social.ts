import { Resource, ResourceType } from 'react-restful';

export interface Social {
    readonly name: string;
    readonly url: string;
    readonly icon: string;
}

export const socialResourceType = new ResourceType<Social>({
    name: nameof<Social>()
});

export const socialResources = {
    findAll: new Resource<Social, Social[]>({
        resourceType: socialResourceType,
        url: '/socials'
    }),
    findOne: new Resource<Social, Social[]>({
        resourceType: socialResourceType,
        url: '/socials/:id'
    }),
    count: new Resource<number>({
        url: '/socials'
    }),
};