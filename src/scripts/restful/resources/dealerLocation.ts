import { Resource, ResourceType } from 'react-restful';

import { Dealer } from './dealer';

export interface DealerLocation {
    readonly id: string;
    readonly name: string;
    readonly dealers: Dealer[];
}

export const dealerlocationResourceType = new ResourceType<DealerLocation>({
    name: nameof<DealerLocation>()
});

export const dealerLocationResources = {
    findAll: new Resource<DealerLocation, DealerLocation[]>({
        resourceType: dealerlocationResourceType,
        url: '/dealerlocations'
    }),
    findOne: new Resource<DealerLocation, DealerLocation[]>({
        resourceType: dealerlocationResourceType,
        url: '/dealerlocations/:id'
    }),
    count: new Resource<number>({
        url: '/dealerlocations'
    }),
};