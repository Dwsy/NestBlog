import {Body, Controller, Get, Param, Res, UseGuards} from '@nestjs/common';
import {Crud} from 'libs/nestjs-mongoose-crud';
import {InjectModel} from 'nestjs-typegoose';
import {ApiBearerAuth, ApiTags} from '@nestjs/swagger';
import {Contents} from 'libs/db/models/contents.model';
import {Fields} from "libs/db/models/fields.model";
import {ReturnModelType} from "@typegoose/typegoose";
import {Tag} from "libs/db/models/tag.model";
import {Classification} from "libs/db/models/classification.model";
import {Comments} from "libs/db/models/comments.model";
import {
    CrudRoute,
    CrudRouteForFind,
    CrudRouteForFindOne,
    CrudRouteWithDto
} from "nestjs-mongoose-crud/src/crud.interface";
import {ExtractJwt, Strategy, StrategyOptions} from "passport-jwt";
import {AuthGuard, PassportStrategy} from "@nestjs/passport";

import {Req} from "@nestjs/common/decorators/http/route-params.decorator";
import {JwtService} from "@nestjs/jwt";
import {User} from "libs/db/models/user.model";

@Crud({
    model: Contents,
    routes: {
        find: false,
        findOne: false
        // update: false,
        // delete: false
    }
})
@Controller('api/contents')
@ApiTags('文章主体')
// extends PassportStrategy(Strategy)
export class ContentsController {
    constructor(@InjectModel(Contents) private readonly model, private jwtService: JwtService,
                @InjectModel(User) private userModel: ReturnModelType<typeof User>,
                @InjectModel(Fields) private readonly field: ReturnModelType<typeof Fields>,
                @InjectModel(Tag) private readonly tag: ReturnModelType<typeof Tag>,
                @InjectModel(Classification) private readonly classification: ReturnModelType<typeof Comments>,
    ) {
        // super({
        //     jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        //     secretOrKey: process.env.SECRET
        // } as StrategyOptions);
    }


    @Get('/test')
    @UseGuards(AuthGuard('jwt'))
    @ApiBearerAuth()
    async test(@Req() request: Request) {

        return 123
        //
        // let Authorization = (new Object(request.headers)['authorization']).split(' ')[1]
        // let users: Array<object> = await this.userModel.find({}, '_id')
        // users.forEach(i => {
        //     if (this.jwtService.sign(String(i)) === Authorization) {
        //
        //     }
        // })
        // // for (let _id in users) {
        // //     console.log(_id)
        // // }
        // // this.jwtService.sign(String(user._id))
        //
        // return Authorization
    }

    @Get('/:id')
    async get(@Param('id') id: string, @Req() request: Request) {
        let ret = await this.model.findById(id)
        let Authorization = (new Object(request.headers)['authorization'])?.split(' ')[1]
        if (Authorization !== undefined) {
            let users: Array<object> = await this.userModel.find({}, '_id')
            for (let i = 0; i < users.length; i++) {
                if (Authorization === this.jwtService.sign(String(users[i]['_id']))) {
                    return ret
                }
            }
        }
        if (ret.isPublish) {
            return ret
        } else {
            return {key: 0, date: new Date()}
        }
    }

    //搜索2021-5-10 21:31:23 挖坑
    @Get('search/s/:s')
    async search(@Param('s') s: string) {
        let reg = new RegExp(s, 'i');
        let content = {
            text: {$regex: reg}
        };
        let Tag = {
            name: {$regex: reg}
        };
        let classification = {
            name: {$regex: reg}
        };
        let title = {
            title: {$regex: reg}
        };
        let S_content = await this.model.find(content, 'text');
        let S_tag = await this.tag.find(Tag)
        let S_classification = await this.classification.find(classification)
        let S_title = await this.field.find(title, 'title contentsId')
        let all = {
            S_title,
            S_content,
            S_tag,
            S_classification,
        }
        return all

    }
}
