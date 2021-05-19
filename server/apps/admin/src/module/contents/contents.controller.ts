import { Controller, Get, Param } from '@nestjs/common';
import { Crud } from 'libs/nestjs-mongoose-crud';
import { InjectModel } from 'nestjs-typegoose';
import { ApiTags } from '@nestjs/swagger';
import { Contents } from 'libs/db/models/contents.model';
import {Fields} from "libs/db/models/fields.model";
import {ReturnModelType} from "@typegoose/typegoose";
import {Tag} from "libs/db/models/tag.model";
import {Classification} from "libs/db/models/classification.model";
import {Comments} from "libs/db/models/comments.model";

@Crud({
    model: Contents,
    routes: {

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
                ) { }
        //搜索2021-5-10 21:31:23 挖坑
        @Get('search/s/:s')
        async search(@Param('s') s: string) {

            let reg = new RegExp(s,'i');
            let content = {
                text:{$regex:reg}
            };
            let Tag = {
                name:{$regex:reg}
            };
            let classification = {
                name:{$regex:reg}
            };
            let title = {
                title:{$regex:reg}
            };
            // let t={
            //     '*.tag' : {
            //         $elemMatch: {
            //         name:{$regex:reg}}
            //     }
            //
            // }
            let S_content= await this.model.find(content,'text');
        // .find({'tag.name':{$regex:reg}})
        //     let test= await this.field.find({},'tag').populate('tag','name').find(t)
            let S_tag= await this.tag.find(Tag)
            let S_classification= await this.classification.find(classification)
            let S_title= await this.field.find(title,'title contentsId')

            // find({$or:[{title:{$regex:regexp}},{content:{$regex:regexp}},{author:{$regex:regexp}}]})
            let all = {
                // test,
                S_title,
                S_content,
                S_tag,
                S_classification,
            }
            //
            // console.log(test);
            // // [0].tag[0].name
            return all

        }

        //搜索2021-5-10 21:31:23 挖坑
}
