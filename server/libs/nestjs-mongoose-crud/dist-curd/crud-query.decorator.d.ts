export declare class ICrudQuery {
    where?: any;
    limit?: number;
    page?: number;
    skip?: number;
    sort?: string | any;
    populate?: string | any;
    select?: string | any;
}
export declare const CrudQuery: (...dataOrPipes: any[]) => ParameterDecorator;
