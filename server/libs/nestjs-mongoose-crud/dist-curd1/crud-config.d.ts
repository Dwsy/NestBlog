import { CrudOptions } from "./crud.interface";
export declare const defaultPaginate: {
    data: string;
    total: string;
    lastPage: string;
    currentPage: string;
};
export declare class CrudConfig {
    static options: CrudOptions;
    static setup(options: CrudOptions): void;
    static get(key: any, defaultValue?: any): any;
}
