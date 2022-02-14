import { Controller, Get, Param, Req, UseGuards } from '@nestjs/common';
import { Crud } from 'libs/nestjs-mongoose-crud';
import { InjectModel } from 'nestjs-typegoose';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Classification } from 'libs/db/models/classification.model';
import { ReturnModelType } from "@typegoose/typegoose";
import { Comments } from "libs/db/models/comments.model";
import { Fields } from "libs/db/models/fields.model";
import { AuthGuard } from "@nestjs/passport";
import { JwtService } from '@nestjs/jwt';
import { User } from 'libs/db/models/user.model';

@Crud({
    model: Classification,
})

@Controller('api/classification')
@ApiTags('分类')
export class ClassificationController {
    constructor(
        @InjectModel(Classification) 
        private readonly model: ReturnModelType<typeof Comments>,
        @InjectModel(Fields) 
        private readonly FieldsModel: ReturnModelType<typeof Fields>,
        @InjectModel(User)
        private userModel: ReturnModelType<typeof User>,
        private jwtService: JwtService,
    ) { }

    @Get('article/:id')
    async get(@Param('id') id: string, @Req() request: Request) {
        let Authorization = new Object(request.headers)['authorization']?.split(
            ' ',
        )[1];
        if (Authorization !== undefined) {
            let users: Array<object> = await this.userModel.find({}, '_id');
            for (let i = 0; i < users.length; i++) {
                if (Authorization === this.jwtService.sign(String(users[i]['_id']))) {
                    // @ts-ignore
                    return this.FieldsModel.
                    find({ classification: id }).
                    populate('tag').
                    populate('classification', 'name').
                    // populate({ path: 'contentsId', select: 'menus.summary' }).
                    sort({ '_id': -1 })
                }
            }
        }
        // @ts-ignore
        return this.FieldsModel.
            find({ classification: id }).
            where({ isDraft: false }).
            populate('tag').
            populate('classification', 'name').
            populate({ path: 'contentsId', select: 'menus.summary'}).
            sort({ '_id': -1 })
    }
    @Get('contentsNum/:id/:num')
    @UseGuards(AuthGuard('jwt'))
    @ApiBearerAuth()
    async addArticle(@Param('id') id: string, @Param('num') num: string) {
        await this.model.findByIdAndUpdate(id, { $inc: { "contentsNum": num } })
    }

    // @Get('articleTitle/:id')
    // async articleTitle (@Param('id') id: string) {
    //     // return this.CommentsModel.find(contentsId:id);
    //     return this.ContentsModel.find({classification:id})
    // }
}
