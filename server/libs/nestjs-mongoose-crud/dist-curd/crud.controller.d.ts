import { Model } from "mongoose";
import { ICrudQuery } from "./crud-query.decorator";
import { CrudOptionsWithModel } from "./crud.interface";
export declare class CrudPlaceholderDto {
    fake?: string;
    [key: string]: any;
}
export declare class CrudController {
    model: Model<{} | any>;
    crudOptions?: CrudOptionsWithModel;
    constructor(model: Model<{} | any>, crudOptions?: CrudOptionsWithModel);
    config(req: any): Promise<any>;
    find(query?: ICrudQuery): Promise<any[] | {
        [x: string]: number | any[];
    }>;
    findOne(id: string, query?: ICrudQuery): import("mongoose").Query<any, any>;
    create(body: CrudPlaceholderDto): Promise<any>;
    update(id: string, body: CrudPlaceholderDto): import("mongoose").Query<any, any>;
    delete(id: string): import("mongoose").Query<any, any>;
}
