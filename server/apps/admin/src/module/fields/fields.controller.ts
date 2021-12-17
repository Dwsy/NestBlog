import {Controller, Get, Ip, Param, Query, Req, UseGuards} from '@nestjs/common';
import {Crud} from 'libs/nestjs-mongoose-crud/';
import {InjectModel} from 'nestjs-typegoose';
import {ApiOperation, ApiTags} from '@nestjs/swagger';
import {Fields} from 'libs/db/models/fields.model';
import {Contents} from 'libs/db/models/contents.model';
import {Browsedata} from 'libs/db/models/browsedata.model';
import {ReturnModelType} from '@typegoose/typegoose';
import {Classification} from 'libs/db/models/classification.model';
import {Comments} from 'libs/db/models/comments.model';
import {Tag} from 'libs/db/models/tag.model';
import {PaginateKeys} from 'libs/nestjs-mongoose-crud/src/crud.interface';
import {AuthGuard} from '@nestjs/passport';
// import {Schema} from "mongoose";
import {JwtService} from '@nestjs/jwt';
import {User} from 'libs/db/models/user.model';
import memCache from 'libs/utils/memCache';
import {FieldsService} from './fields.service';

// import {CacheService} from '../../cache/cache.service';

@Crud({
    model: Fields,
    routes: {
        find: false,
        findOne: false,
        // create: false,
        // update: false,
        // delete: false
    },
})
@Controller('api/fields')
@ApiTags('文章自定义字段')
export class FieldsController {
    constructor(
        @InjectModel(Fields) 
        private readonly model: ReturnModelType<typeof Fields>,
        @InjectModel(Contents)
        private readonly ContentsModel: ReturnModelType<typeof Contents>,
        @InjectModel(Classification)
        private readonly ClassificationModel: ReturnModelType<typeof Classification>,
        @InjectModel(Tag) private readonly TagModel: ReturnModelType<typeof Tag>,
        @InjectModel(User) private userModel: ReturnModelType<typeof User>,
        @InjectModel(Comments)
        private CommentModel: ReturnModelType<typeof Comments>,
        @InjectModel(Browsedata)
        private BrowsedataModel: ReturnModelType<typeof Browsedata>,
        private jwtService: JwtService,
        private readonly fieldsService: FieldsService,
    ) {
    }

    // private readonly cache: CacheService
    private cache = memCache;

    @Get('archives')
    archives() {
        return this.model
            .find({isDraft: false}, 'title createdAt contentsId')
            .sort({_id: -1});
    }

    @Get('/view/:id')
    async view(@Param('id') id: string) {
        let data = await this.model.findByIdAndUpdate(id, {$inc: {view: 1}});
        return {view: data.view};
    }

    @Get('title/:page')
    async titlePage(@Param('page') page: string) {
        return this.ContentsModel.find({}, 'title')
            .limit(8)
            .skip(parseInt(page) * 8 - 8)
            .sort({_id: 1});
    }

    @Get('tag/:id')
    async getTag(@Param('id') id: string) {
        return this.model.find().populate('tag', 'name');
    }

    @Get('all/:page')
    async getAll(@Param('page') page: string) {
        return this.model
            .find()
            .populate('tag')
            .populate('classification')
            .limit(8)
            .skip(parseInt(page) * 8 - 8)
            .sort({_id: -1});
    }

    @Get('user')
    async ip(@Ip() ip, @Req() req: Request) {
        // console.log(req);
        // let ret = {ip, ua: req.headers['user-agent']};
        // this.BrowsedataModel.create(ret);
        // return ret;
        let UserInfo = 'blog'
        this.fieldsService.saveUserInfo(ip,req,UserInfo)
    }

    @UseGuards(AuthGuard('jwt'))
    @Get('draftList')
    @ApiOperation({summary: 'Find all records', operationId: 'list'})
    async draftList(@Query('query') query) {
        return this.fieldsService.getDraftList(query);
    }

    @Get(':id')
    async findOne(@Param('id') id: string,@Req() request: Request,@Query('query') query,
    ) {
        return this.fieldsService.findOneById(id, request, query);
    }

    @Get()
    @ApiOperation({summary: 'Find all records', operationId: 'list'})
    async find(@Query('query') query) {
        return this.fieldsService.findByQuery(query);
    }
}
