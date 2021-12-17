import {Body, Controller, Get, Param, Post, Req, UseGuards} from '@nestjs/common';
import {Crud} from 'libs/nestjs-mongoose-crud';
import {InjectModel} from 'nestjs-typegoose';
import {ApiTags} from '@nestjs/swagger';
import {Tag} from 'libs/db/models/tag.model';
import {ReturnModelType} from '@typegoose/typegoose';
import {Fields} from 'libs/db/models/fields.model';
import {TagService} from './tag.service';
import {JwtService} from '@nestjs/jwt';
import {User} from 'libs/db/models/user.model';
class contentsNum {
    tagId: Array<string>;
    num: number;
}

@Crud({
    model: Tag,
    // routes: {
    //     create: false,
    //     update: false,
    //     delete: false
    // }
})
@Controller('api/tag')
@ApiTags('标签')
export class TagController {
    constructor(
        @InjectModel(Tag) private readonly model: ReturnModelType<typeof Tag>,
        @InjectModel(Fields)
        private readonly fieldsModel: ReturnModelType<typeof Fields>,
        private readonly tagService: TagService,
        @InjectModel(User) 
        private userModel: ReturnModelType<typeof User>,
        private jwtService: JwtService,
    ) {
    }

    @Get('article/:ids')
    async get(@Param('ids') ids: Array<String>,@Req() request: Request) {
        let Authorization = new Object(request.headers)['authorization']?.split(
            ' ',
        )[1];
        if (Authorization !== undefined) {
            let users: Array<object> = await this.userModel.find({}, '_id');
            for (let i = 0; i < users.length; i++) {
                if (Authorization === this.jwtService.sign(String(users[i]['_id']))) {
                    return this.fieldsModel
                    .find({tag: {$all: ids}})
                    .sort({_id: -1})
                    .populate('tag');
                }
            }            
        }
        return this.fieldsModel
        .find({tag: {$all: ids}})
        .where({ isDraft: false })
        .sort({_id: -1})
        .populate('tag');
    }

    @Post('contentsNum/')
    async test(@Body() dto: contentsNum) {
        for (let i = 0; i < dto.tagId.length; i++) {
            let a = await this.model.findByIdAndUpdate(dto.tagId[i], {
                $inc: {contentsNum: dto.num},
            });
        }
    }
}
