import { Injectable } from '@nestjs/common';
import { Controller, Get, Ip, Param, Query, Req } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Fields } from 'libs/db/models/fields.model';
import { Contents } from 'libs/db/models/contents.model';
import { ReturnModelType } from '@typegoose/typegoose';
import { Classification } from 'libs/db/models/classification.model';
import { Comments } from 'libs/db/models/comments.model';
import { Tag } from 'libs/db/models/tag.model';
import { fieldsIndexSummaryDto } from './dto/fieldsIndexSummaryDto';
import { PaginateKeys } from 'libs/nestjs-mongoose-crud/src/crud.interface';
// import {AuthGuard} from '@nestjs/passport';
// import {Schema} from "mongoose";
import { JwtService } from '@nestjs/jwt';
import { User } from 'libs/db/models/user.model';
import memCache from 'libs/utils/memCache';
import { Browsedata } from 'libs/db/models/browsedata.model';
let libqqwry = require('lib-qqwry');
let qqwry = libqqwry() //初始化IP库解析器
qqwry.speed(); //启用急速模式;
// import {CacheService} from '../../cache/cache.service';

@Injectable()
export class FieldsService {
    private cache = memCache;

    constructor(
        @InjectModel(Fields)
        private readonly model: ReturnModelType<typeof Fields>,
        @InjectModel(User)
        private userModel: ReturnModelType<typeof User>,
        @InjectModel(Comments)
        private CommentModel: ReturnModelType<typeof Comments>,
        private jwtService: JwtService,
        @InjectModel(Browsedata)
        private BrowsedataModel: ReturnModelType<typeof Browsedata>,
    ) {
    }

    async getDraftList(query) {
        let populate = undefined;
        let page = 1;
        let skip = 0;
        let limit = 20;
        let where = {};
        let sort = undefined;
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
            .where({ isDraft: true })
            .skip(skip)
            .limit(limit)
            .sort(sort)
            .populate(populate);
        const paginateKeys: PaginateKeys | false = {
            data: 'data',
            total: 'total',
            lastPage: 'lastPage',
            currentPage: 'page',
        };

        if (paginateKeys === false) {
            return data;
        } else {
            const total = await this.model.countDocuments(where);
            return {
                [paginateKeys.total]: total,
                [paginateKeys.data]: data,
                [paginateKeys.lastPage]: Math.ceil(total / limit),
                [paginateKeys.currentPage]: page,
            };
        }
    }

    async findOneById(id: string, request: Request, @Query('query') query) {
        let populate = undefined;

        if (typeof (query)!=="object") {
            // console.log(typeof (query))
            query = JSON.parse(query);
            populate = query.populate;
        }else {
            populate = query.populate;
        }

        // console.log(populate);
        let ret = await this.model.findById(id).populate(populate);
        let Authorization = new Object(request.headers)['authorization']?.split(
            ' ',
        )[1];
        if (Authorization !== undefined) {
            let users: Array<object> = await this.userModel.find({}, '_id');
            for (let i = 0; i < users.length; i++) {
                if (Authorization === this.jwtService.sign(String(users[i]['_id']))) {
                    return ret;
                }
            }
        }
        if (!ret.isDraft) {
            return ret;
        } else {
            return {
                isDraft: true,
                date: new Date(),
            };
        }
    }

    async cacheIndex(query: { populate: any; page: number; limit: number; where: {}; sort: any; }, recently: any) {
        // return await this.find(query);
        // console.log("cache")
        let ret = await this.cache.get('index');
        // console.log("ret"+ret)
        if (ret !== undefined) {
            return ret;
        }
        // console.log("==null")
        //--
        let populate = undefined;
        let page = 1;
        let skip = 0;
        let limit = 20;
        let where = {};
        let sort = undefined;
        populate = query.populate;
        page = query.page;
        skip = 0;
        limit = query.limit;
        where = query.where;
        sort = query.sort;


        if (skip < 1) {
            skip = (page - 1) * limit;
        }
        let data = await this.model
            .find()
            // .where(where)
            .where({ isDraft: false })
            .skip(skip)
            .limit(limit)
            .sort(sort)
            .populate({ path: 'contentsId', select: 'menus.summary' })
            .populate(populate);
        const paginateKeys: PaginateKeys | false = {
            data: 'data',
            total: 'total',
            lastPage: 'lastPage',
            currentPage: 'page',
        };

        if (paginateKeys === false) {
        } else {
            const total = await this.model.countDocuments(where);
            ret = {
                [paginateKeys.total]: total,
                [paginateKeys.data]: data,
                [paginateKeys.lastPage]: Math.ceil(total / limit),
                [paginateKeys.currentPage]: page,
                recently: recently,
            };
        }
        //--
        this.cache.set('index', ret, 5 * 60);
        return this.cache.get('index');
    }

    async findByQuery(query) {
        if (query) {
            query = JSON.parse(query);
        }

        let recently = await this.cache.get('recently');
        // console.log(recently)
        if (recently === undefined) {
            // console.log("recently = await this.CommentModel.find({}, '-email').limit(5).sort({'_id': -1})")
            recently = await this.CommentModel.find({}, '-ip -email')
                .limit(5)
                .sort({ _id: -1 });
            this.cache.set('recently', recently, 10 * 60);
        }
        let populate = undefined;
        let page = 1;
        let skip = 0;
        let limit = 20;
        let where = {};
        let sort = undefined;

        if ('1' === query.page || 1 === query.page) {
            return this.cacheIndex(query, recently);
        }

        populate = query.populate;
        page = query.page;
        skip = 0;
        limit = query.limit;
        where = query.where;
        sort = query.sort;


        if (skip < 1) {
            skip = (page - 1) * limit;
        }
        const data = await this.model
            .find()
            // .where(where)
            .where({ isDraft: false })
            .skip(skip)
            .limit(limit)
            .sort(sort)
            .populate({ path: 'contentsId', select: 'menus.summary' })
            .populate(populate)
        const paginateKeys: PaginateKeys | false = {
            data: 'data',
            total: 'total',
            lastPage: 'lastPage',
            currentPage: 'page',
        };

        if (paginateKeys === false) {
        } else {
            const total = await this.model.countDocuments(where);
            return {
                [paginateKeys.total]: total,
                [paginateKeys.data]: data,
                [paginateKeys.lastPage]: Math.ceil(total / limit),
                [paginateKeys.currentPage]: page,
                recently: recently,
            };
        }

        // return data;
    }

    async saveUserInfo(@Ip() ip: string, @Req() req: Request, origin: string) {
        let IP
        let proxyIp = req.headers['X-Real-IP'] || req.headers['x-forwarded-for'];
        // console.log(ipStr);
        if (proxyIp == undefined) {
            if (ip === '::1') {
                IP = '0.0.0.0'
            } else {
                IP = (ip.split(':'))[3]
            }
        } else {
            IP = proxyIp
        }
        let get= this.cache.get(IP)
        if ( get === undefined) {

            let ipinfo = qqwry.searchIP(IP); //查询IP信息
            let ret = {
                ip: IP,
                ua: req.headers['user-agent'] + origin,
                info: ipinfo,
                view: 1
            };
            
            var data = await this.BrowsedataModel.create(ret);
            this.cache.set(IP, { id: data._id }, 60 * 15);
        } else {
            await this.BrowsedataModel.findOneAndUpdate({ _id: get.id }, { $inc: { view: 1 } })
        }
        return null
    }

}
