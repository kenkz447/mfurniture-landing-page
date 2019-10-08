import { Resource, ResourceType } from 'react-restful';

import { UploadedFile } from './uploadedFile';

export interface Setting {
    readonly key: 'CONTACT_PHONE' | 'CONTACT_ADDRESS' | 'CONTACT_EMAIL' | 'MOBILE_SIDER_IMAGE';
    readonly value: string;
    readonly valueMedia?: UploadedFile;
}

export const settingResourceType = new ResourceType<Setting>({
    name: nameof<Setting>()
});

export const settingResources = {
    findAll: new Resource<Setting, Setting[]>({
        resourceType: settingResourceType,
        url: '/settings'
    }),
    findOne: new Resource<Setting, Setting[]>({
        resourceType: settingResourceType,
        url: '/settings/:id'
    }),
    count: new Resource<number>({
        url: '/settings'
    }),
};