import {Injectable} from '@nestjs/common';
import {InjectModel} from 'nestjs-typegoose';
import {Contents} from 'libs/db/models/contents.model';
import {Fields} from 'libs/db/models/fields.model';
import {ReturnModelType} from '@typegoose/typegoose';
import {Tag} from 'libs/db/models/tag.model';
import {Classification} from 'libs/db/models/classification.model';
import {Comments} from 'libs/db/models/comments.model';
import {JwtService} from '@nestjs/jwt';
import {User} from 'libs/db/models/user.model';
import MarkdownUtils from 'libs/utils/markdown';

@Injectable()
export class ContentsService {
    constructor(
        private jwtService: JwtService,
        @InjectModel(Classification)
        private readonly classification: ReturnModelType<typeof Comments>,
        @InjectModel(Contents) 
        private readonly model,
        @InjectModel(User) 
        private userModel: ReturnModelType<typeof User>,
        @InjectModel(Fields) 
        private readonly field: ReturnModelType<typeof Fields>,
        @InjectModel(Tag) 
        private readonly tag: ReturnModelType<typeof Tag>,
    ) {
    }

    contentToArticleAttr(htmlStr: string, mdStr: string) {
        console.log(htmlStr);
        console.log(mdStr);
        const {html: menusHtml, menus} = MarkdownUtils.markdownRender(htmlStr);
        const markText = MarkdownUtils.htmlStrToText(htmlStr);
        return {
            menusHtml,
            menus,
            summary: mdStr.substr(0, 150).replace(/[\r\n]/g, ''),
        };
    }

    async createdToc(id: string) {
        const data = await this.model.findById(id, 'text mdText');
        const menusData = await this.contentToArticleAttr(data.text, data.mdText);
        const ret = await this.model.findByIdAndUpdate(id, {
            $set: {
                menus: {menus: menusData.menus, summary: menusData.summary},
                text: menusData.menusHtml,
            },
        });
        return ret.menus;
    }

    async getContentById(id: string, request: Request) {
        let ret = await this.model.findById(id, '-mdText');
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
        if (ret.isPublish) {
            return ret;
        } else {
            return {key: 0, date: new Date()};
        }
    }

    async search(s: string) {
        let reg = new RegExp(s, 'i');
        let content = {
            text: {$regex: reg},
        };
        let Tag = {
            name: {$regex: reg},
        };
        let classification = {
            name: {$regex: reg},
        };
        let title = {
            title: {$regex: reg},
        };
        let S_content = await this.model.find(content, 'text');
        let S_tag = await this.tag.find(Tag);
        let S_classification = await this.classification.find(classification);
        let S_title = await this.field.find(title, 'title contentsId');
        return {
            S_title,
            S_content,
            S_tag,
            S_classification,
        };
    }
}
