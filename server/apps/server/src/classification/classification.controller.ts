import {Controller, Get, Param} from '@nestjs/common';
import { Crud } from 'nestjs-mongoose-crud';
import { InjectModel } from 'nestjs-typegoose';
import { ApiTags } from '@nestjs/swagger';
import { Classification } from 'libs/db/models/classification.model';
import {ReturnModelType} from "@typegoose/typegoose";
import {Comments} from "libs/db/models/comments.model";
import {Fields} from "libs/db/models/fields.model";

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
                @InjectModel(Fields) private readonly FieldsModel: ReturnModelType<typeof Fields>) { }

    @Get('article/:id')
    async get (@Param('id') id: string) {

        // return this.CommentsModel.find(contentsId:id);
        return this.FieldsModel.find({classification:id})
    }
}
