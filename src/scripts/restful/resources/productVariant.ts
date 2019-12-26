import { Material } from './material';

export interface ProductVariant {
    readonly id: string;
    readonly name: string;
    readonly materialPrimary: Material;
    readonly materialSecondariesLabel: string;
    readonly materialSecondaries: Material[];
}