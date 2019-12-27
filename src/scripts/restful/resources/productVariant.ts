import { Material } from './material';
import { UploadedFile } from './uploadedFile';

export interface ProductVariant {
    readonly id: string;
    readonly name: string;
    readonly materialPrimary: Material;
    readonly materialSecondariesLabel: string;
    readonly materialSecondaries: Material[];
    readonly photos: UploadedFile[];
}