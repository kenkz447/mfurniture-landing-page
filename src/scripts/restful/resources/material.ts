import { UploadedFile } from './uploadedFile';

export interface Material {
    readonly id: number;
    readonly name: string;
    readonly texture: UploadedFile;
}