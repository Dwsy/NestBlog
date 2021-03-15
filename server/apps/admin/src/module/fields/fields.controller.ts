import { Body, Controller, Get, Ip, Param, Query, UseGuards } from '@nestjs/common';
import { Crud } from 'libs/nestjs-mongoose-crud/';
import { InjectModel } from 'nestjs-typegoose';
import { ApiBearerAuth, ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
import { Fields } from 'libs/db/models/fields.model';
import { Contents } from "libs/db/models/contents.model";
import { ReturnModelType } from "@typegoose/typegoose";
import { Classification } from "libs/db/models/classification.model";
// import {Comments} from "libs/db/models/comments.model";
import { Tag } from "libs/db/models/tag.model";
import { PaginateKeys } from 'libs/nestjs-mongoose-crud/src/crud.interface';
import { AuthGuard } from '@nestjs/passport';



@Crud({
    model: Fields,
    routes: {
        find: false,
        findOne:false
        // create: false,
        // update: false,
        // delete: false
    }
})

@Controller('api/fields')
@ApiTags('文章自定义字段')
export class FieldsController {
    constructor(@InjectModel(Fields) private readonly model: ReturnModelType<typeof Fields>,
        @InjectModel(Contents) private readonly ContentsModel: ReturnModelType<typeof Contents>,
        @InjectModel(Classification) private readonly ClassificationModel: ReturnModelType<typeof Classification>,
        @InjectModel(Tag) private readonly TagModel: ReturnModelType<typeof Tag>,
    ) {
    }


    @Get('title/:page')
    async titlePage(@Param('page') page: string) {
        return this.ContentsModel.find({}, 'title').limit(8).skip(parseInt(page) * 8 - 8).sort({ '_id': 1 });
    }

    @Get('tag/:id')
    async getTag(@Param('id') id: string) {
        let a = this.model.find().populate('tag', 'name');
        return a;
    }

    @Get('all/:page')
    async getAll(@Param('page') page: string) {
        return this.model.find().populate('tag').populate('classification').limit(8).skip(parseInt(page) * 8 - 8).sort({ '_id': -1 });
    }

    @Get('ip')
    async test(@Ip()ip){
        return ip
    }
    @Get(':id')
    // findOne(@Param("id") id: string, @Query('query') query) {
    async findOne(@Param("id") id: string) {

        // let populate = undefined
        // let populate1 = undefined
        // let select = undefined
        // let where = undefined
        
        
        // if (query) {
        //     query = JSON.parse(query)
        //     populate = query.populate
        //     populate = query.populate1
        //     where = query.where
        //     select = query.select
        // }
        // console.log(populate);
        return await this.model
            .findById(id)
            .populate('tag classification')
            // .select(select)
            // .where(where);
    }

    @Get()
    @ApiOperation({ summary: "Find all records", operationId: "list" })
    async find(@Query('query') query) {
        let populate = undefined
        let page = 1
        let skip = 0
        let limit = 20
        let where = {}
        let sort = undefined
        if (query) {
            query = JSON.parse(query)
            populate = query.populate
            page = query.page
            skip = 0
            limit = query.limit
            where = query.where
            sort = query.sort
        }

        if (skip < 1) {
            skip = (page - 1) * limit;
        }
        const data = await this.model
            .find()
            // .where(where)
            .where({ "isDraft": false })
            .skip(skip)
            .limit(limit)
            .sort(sort)
            .populate(populate);
        const paginateKeys: PaginateKeys | false = {
            data: 'data',
            total: 'total',
            lastPage: 'lastPage',
            currentPage: 'page'
        };


        if (paginateKeys !== false) {
            const total = await this.model.countDocuments(where);
            return {
                [paginateKeys.total]: total,
                [paginateKeys.data]: data,
                [paginateKeys.lastPage]: Math.ceil(total / limit),
                [paginateKeys.currentPage]: page
            };
        }
        // console.log(limit);
        // console.log(query.populate);


        return data;
    };



    @Get('/draft')
    @UseGuards(AuthGuard('jwt'))
    @ApiBearerAuth()
    @ApiOperation({ summary: "Find all records", operationId: "list" })
    async findDraft(@Query('query') query) {
        let populate = undefined
        let page = 1
        let skip = 0
        let limit = 20
        let where = {}
        let sort = undefined
        if (query) {
            query = JSON.parse(query)
            populate = query.populate
            page = query.page
            skip = 0
            limit = query.limit
            where = query.where
            sort = query.sort
        }

        if (skip < 1) {
            skip = (page - 1) * limit;
        }
        const data = await this.model
            .find()
            // .where(where)
            .where({ "isDraft": true })
            .skip(skip)
            .limit(limit)
            .sort(sort)
            .populate(populate);



        const paginateKeys: PaginateKeys | false = {
            data: 'data',
            total: 'total',
            lastPage: 'lastPage',
            currentPage: 'page'
        };


        if (paginateKeys !== false) {
            const total = await this.model.countDocuments(where);
            return {
                [paginateKeys.total]: total,
                [paginateKeys.data]: data,
                [paginateKeys.lastPage]: Math.ceil(total / limit),
                [paginateKeys.currentPage]: page
            };
        }
        // console.log(limit);
        // console.log(query.populate);


        return data;
    };
}
