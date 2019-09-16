import { Resource, ResourceType } from 'react-restful';

export interface Dealer {
    readonly name: string;
    readonly address: string;
    readonly email: string;
    readonly tel: string;
    readonly city: 'HCM' | 'DANANG' | 'HANOI';
}

export const dealerResourceType = new ResourceType<Dealer>({
    name: nameof<Dealer>()
});

export const dealerResources = {
    findAll: new Resource<Dealer, Dealer[]>({
        resourceType: dealerResourceType,
        url: '/dealers'
    }),
    findOne: new Resource<Dealer, Dealer[]>({
        resourceType: dealerResourceType,
        url: '/dealers/:id'
    }),
    count: new Resource<number>({
        url: '/dealers'
    }),
};