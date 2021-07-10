import {Body, Controller, Get, HttpCode, Ip, Param, Query, Req, UseGuards} from '@nestjs/common';
import {Crud} from 'libs/nestjs-mongoose-crud/';
import {InjectModel} from 'nestjs-typegoose';
import {ApiBearerAuth, ApiOperation, ApiQuery, ApiTags} from '@nestjs/swagger';
import {Fields} from 'libs/db/models/fields.model';
import {Contents} from "libs/db/models/contents.model";
import {ReturnModelType} from "@typegoose/typegoose";
import {Classification} from "libs/db/models/classification.model";
import {Comments} from "libs/db/models/comments.model";
import {Tag} from "libs/db/models/tag.model";
import {PaginateKeys} from 'libs/nestjs-mongoose-crud/src/crud.interface';
// import {AuthGuard} from '@nestjs/passport';
// import {Schema} from "mongoose";
import {JwtService} from "@nestjs/jwt";
import {User} from "libs/db/models/user.model";
import { CacheService } from '../../cache/cache.service';

@Crud({
    model: Fields,
    routes: {
        find: false,
        findOne: false
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
                @InjectModel(User) private userModel: ReturnModelType<typeof User>,
                @InjectModel(Comments) private CommentModel: ReturnModelType<typeof Comments>,
                private jwtService: JwtService,
                private readonly cache: CacheService
    ) {
    }


    @Get('archives')
    async archives() {
        let t = await this.model.find({isDraft: false}, 'title createdAt contentsId').sort({'_id': -1});
        return t;
    }

    @Get('/view/:id')
    async view(@Param('id') id: string) {
        let data = await this.model.findByIdAndUpdate(id, {$inc: {"view": 1}});
        return {
            view: data.view,

        }
    }

    @Get('title/:page')
    async titlePage(@Param('page') page: string) {
        return this.ContentsModel.find({}, 'title').limit(8).skip(parseInt(page) * 8 - 8).sort({'_id': 1});
    }

    @Get('tag/:id')
    async getTag(@Param('id') id: string) {
        let a = this.model.find().populate('tag', 'name');
        return a;
    }

    @Get('all/:page')
    async getAll(@Param('page') page: string) {
        return this.model.find().populate('tag').populate('classification').limit(8).skip(parseInt(page) * 8 - 8).sort({'_id': -1});
    }

    @Get('ip')
    async test(@Ip() ip) {
        return ip
    }

    @Get('draftList')
    @ApiOperation({summary: "Find all records", operationId: "list"})
    async draftList(@Query('query') query) {
        let populate = undefined
        let page = 1
        let skip = 0
        let limit = 20
        let where = {}
        let sort = undefined

        if (query) {
            query = JSON.parse(query);
            populate = query.populate;
            page = query.page;
            skip = 0;
            limit = query.limit;
            where = query.where;
            sort = query.sort;
        }

        if (skip < 1) {
            skip = (page - 1) * limit;
        }
        const data = await this.model
            .find()
            // .where(where)
            .where({"isDraft": true})
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

        return data;
    };

    @Get(':id')
    async findOne(@Param("id") id: string, @Req() request: Request, @Query('query') query) {
        let populate = undefined
        if (query) {
            query = JSON.parse(query)
            populate = query.populate
        }
        // console.log(populate);
        let ret = await this.model.findById(id).populate(populate)
        let Authorization = (new Object(request.headers)['authorization'])?.split(' ')[1]
        if (Authorization !== undefined) {
            let users: Array<object> = await this.userModel.find({}, '_id')
            for (let i = 0; i < users.length; i++) {
                if (Authorization === this.jwtService.sign(String(users[i]['_id']))) {
                    return ret
                }
            }
        }
        if (!ret.isDraft) {
            return ret;
        } else {
            return {
                'isDraft': true,
                'date': new Date()
            }
        }
        // if (ret.contentsId['isPublish']!==undefined) {
        //     if (ret.contentsId['isPublish']) {
        //
        //     }
        // }else return ret;
        // console.log();
        // console.log(ret)
        // console.log(ret.contentsId['isPublish'])
        // if (ret.contentsId['isPublish']!==undefined&&ret.contentsId['isPublish']===true) {
        //     return ret;
        // } else {
        //     return "<h4>无访问权限</h4>"
        // }
    }
    @Get('cache')
    @ApiOperation({summary: "Find all records", operationId: "list"})
    async cacheIndex(query,recently) {
        // return await this.find(query);
        // console.log("cache")
        let ret = await this.cache.get('index')
        // console.log("ret"+ret)
        if (ret !== null) {

            return ret
        }
        // console.log("==null")
        //--
        let populate = undefined
        let page = 1
        let skip = 0
        let limit = 20
        let where = {}
        let sort = undefined
        if (query) {

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
            .where({"isDraft": false})
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
            ret= {
                [paginateKeys.total]: total,
                [paginateKeys.data]: data,
                [paginateKeys.lastPage]: Math.ceil(total / limit),
                [paginateKeys.currentPage]: page,
                recently:recently
            };
        }
        //--
        await this.cache.set('index',ret,5*60)
        return this.cache.get('index');
    }


    @Get()
    @ApiOperation({summary: "Find all records", operationId: "list"})
    async find(@Query('query') query) {
        query = JSON.parse(query)
        let recently = await this.cache.get('recently')
        // console.log(recently)
        if (recently === null) {
            // console.log("recently = await this.CommentModel.find({}, '-email').limit(5).sort({'_id': -1})")
            recently = await this.CommentModel.find({}, '-email').limit(5).sort({'_id': -1})
            await this.cache.set('recently',recently,10*60)
        }
        let populate = undefined
        let page = 1
        let skip = 0
        let limit = 20
        let where = {}
        let sort = undefined


        if ('1'===query.page) {

            return  this.cacheIndex(query,recently)
        }
        if (query) {
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
            .where({"isDraft": false})
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
                [paginateKeys.currentPage]: page,
                recently:recently
            };
        }

        // return data;
    };


}
