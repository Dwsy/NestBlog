import {Controller, Get, Param, Put, Res, UseGuards} from '@nestjs/common';
import {Crud} from 'libs/nestjs-mongoose-crud';
import {InjectModel} from 'nestjs-typegoose';
import {ApiBearerAuth, ApiTags} from '@nestjs/swagger';
import {Contents} from 'libs/db/models/contents.model';
import {Fields} from "libs/db/models/fields.model";
import {ReturnModelType} from "@typegoose/typegoose";
import {Tag} from "libs/db/models/tag.model";
import {Classification} from "libs/db/models/classification.model";
import {Comments} from "libs/db/models/comments.model";
import {AuthGuard} from "@nestjs/passport";
import {Req} from "@nestjs/common/decorators/http/route-params.decorator";
import {JwtService} from "@nestjs/jwt";
import {User} from "libs/db/models/user.model";
import MarkdownUtils from 'libs/utils/markdown';
import {CacheService} from '../../cache/cache.service';

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
    constructor(
        @InjectModel(Contents) private readonly model, private jwtService: JwtService,
        @InjectModel(User) private userModel: ReturnModelType<typeof User>,
        @InjectModel(Fields) private readonly field: ReturnModelType<typeof Fields>,
        @InjectModel(Tag) private readonly tag: ReturnModelType<typeof Tag>,
        @InjectModel(Classification) private readonly classification: ReturnModelType<typeof Comments>,
        private readonly cache: CacheService,
    ) {
        // super({
        //     jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        //     secretOrKey: process.env.SECRET
        // } as StrategyOptions);
    }
    contentToArticleAttr(htmlStr: string, mdStr: string) {
        console.log(htmlStr)
        console.log(mdStr)
        const { html: menusHtml, menus } = MarkdownUtils.markdownRender(htmlStr);
        const markText = MarkdownUtils.htmlStrToText(htmlStr);
        return {
            menusHtml,
            menus,
            summary: mdStr.substr(0, 150).replace(/[\r\n]/g, '')
        }
    }
    @Put('/created_toc/:id')
    @UseGuards(AuthGuard('jwt'))
    @ApiBearerAuth()
    async createdToc(@Param('id') id: string) {
        const data = await this.model.findById(id, 'text mdText')
        // console.log("---------------------")
        // console.log(data)
        // console.log("---------------------")
        const menusData = await this.contentToArticleAttr(data.text, data.mdText)
        // console.log(menusData)
        const ret = await this.model.findByIdAndUpdate(id, {
            $set: {
                menus: { menus: menusData.menus, summary: menusData.summary },
                text: menusData.menusHtml
            }
        })
        // console.log(ret)
        return ret.menus
    }

    @Get('/test')
    // @UseGuards(AuthGuard('jwt'))
    // @ApiBearerAuth()
    async test(@Res() res: Response, @Req() req: Request) {

        // await this.cache.set('username', '李四');
        // // await this.cache.
        // console.log(await this.cache.get('username'));


        // res.
        // return 123
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
        let ret = await this.model.findById(id, '-mdText')
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
            return { key: 0, date: new Date() }
        }
    }

    //搜索2021-5-10 21:31:23
    @Get('search/s/:s')
    async search(@Param('s') s: string) {
        let reg = new RegExp(s, 'i');
        let content = {
            text: { $regex: reg }
        };
        let Tag = {
            name: { $regex: reg }
        };
        let classification = {
            name: { $regex: reg }
        };
        let title = {
            title: { $regex: reg }
        };
        let S_content = await this.model.find(content, 'text');
        let S_tag = await this.tag.find(Tag)
        let S_classification = await this.classification.find(classification)
        let S_title = await this.field.find(title, 'title contentsId')
        return {
            S_title,
            S_content,
            S_tag,
            S_classification,
        }

    }
}
