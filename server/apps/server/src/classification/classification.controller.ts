import {Controller, Get, Param} from '@nestjs/common';
import { Crud } from 'nestjs-mongoose-crud';
import { InjectModel } from 'nestjs-typegoose';
import { ApiTags } from '@nestjs/swagger';
import { Classification } from 'libs/db/models/classification.model';
import {ReturnModelType} from "@typegoose/typegoose";
import {Comments} from "libs/db/models/comments.model";
import {Fields} from "libs/db/models/fields.model";
// import { Contents } from 'libs/db/models/contents.model';

@Crud({
    model:Classification,
    routes: {
        create: false,
        update: false,
        delete: false
      }
})

@Controller('classification')
@ApiTags('分类')
export class ClassificationController {
    constructor(@InjectModel(Classification) private readonly model: ReturnModelType<typeof Comments>,
                @InjectModel(Fields) private readonly FieldsModel: ReturnModelType<typeof Fields>,
                // @InjectModel(Contents) private readonly ContentsModel: ReturnModelType<typeof Comments>
                ) { }

    @Get('article/:id')
    async get (@Param('id') id: string) {
        // return this.CommentsModel.find(contentsId:id);
        // @ts-ignore
        return this.FieldsModel.find({classification:id}).populate('tag').populate('classification','name').sort({'_id':-1})
    }
    // @Get('articleTitle/:id')
    // async articleTitle (@Param('id') id: string) {
    //     // return this.CommentsModel.find(contentsId:id);
    //     return this.ContentsModel.find({classification:id})
    // }
}
