import {Controller, Get, Param} from '@nestjs/common';
import {Crud} from 'nestjs-mongoose-crud';
import {InjectModel} from 'nestjs-typegoose';
import {ApiTags} from '@nestjs/swagger';
import {Fields} from 'libs/db/models/fields.model';
import {Contents} from "libs/db/models/contents.model";
import {ReturnModelType} from "@typegoose/typegoose";
import {Comments} from "libs/db/models/comments.model";

@Crud({
    model: Fields,
    routes: {
        create: false,
        update: false,
        delete: false
    }
})

@Controller('fields')
@ApiTags('文章自定义字段')
export class FieldsController {
    constructor(@InjectModel(Fields) private readonly model,
                @InjectModel(Contents) private readonly ContentsModel: ReturnModelType<typeof Comments>) {
    }
    @Get('title/:id')
    async titlePage(@Param('id') id: string)  {

        // return this.CommentsModel.find(contentsId:id);
        return this.ContentsModel.find({},'title').limit(8).skip(parseInt(id)*8-8).sort({'_id':-1})
    }

}
