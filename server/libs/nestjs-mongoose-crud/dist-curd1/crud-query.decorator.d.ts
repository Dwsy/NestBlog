import { QueryOptions } from "mongoose";
export declare class ICrudQuery {
    where?: any;
    limit?: number;
    page?: number;
    skip?: number;
    sort?: string | any;
    populate?: string | any;
    select?: string | any;
    collation?: QueryOptions['collation'];
}
export declare const CrudQuery: (...dataOrPipes: any[]) => ParameterDecorator;
