import {Controller, Get, Param} from '@nestjs/common';
import {Crud} from 'nestjs-mongoose-crud';
import {InjectModel} from 'nestjs-typegoose';
import {ApiTags} from '@nestjs/swagger';
import {Fields} from 'libs/db/models/fields.model';
import {Contents} from "libs/db/models/contents.model";
import {ReturnModelType} from "@typegoose/typegoose";
import {Classification} from "libs/db/models/classification.model";
import {Comments} from "libs/db/models/comments.model";
import {Tag} from "libs/db/models/tag.model";

@Crud({
    model: Fields,
    routes: {
        // create: false,
        // update: false,
        // delete: false
    }
})

@Controller('fields')
@ApiTags('文章自定义字段')
export class FieldsController {
    constructor(@InjectModel(Fields) private readonly model: ReturnModelType<typeof Fields>,
                @InjectModel(Contents) private readonly ContentsModel: ReturnModelType<typeof Contents>,
                @InjectModel(Classification) private readonly ClassificationModel: ReturnModelType<typeof Classification>,
                @InjectModel(Tag) private readonly TagModel: ReturnModelType<typeof Tag>) {
    }


    @Get('title/:page')
    async titlePage(@Param('page') page: string) {
        return this.ContentsModel.find({}, 'title').limit(8).skip(parseInt(page) * 8 - 8).sort({'_id': 1});
    }

    @Get('tag/:id')
    async getTag(@Param('id') id: string){
        let a = this.model.find().populate('tag.name');
        return a;
    }
    @Get('all/:page')
    async getAll(@Param('page') page: string){
        return this.model.find().populate('tag').populate('classification').limit(8).skip(parseInt(page) * 8 - 8).sort({'_id': -1});
    }

    @Get('test')
    async test(){
        let a = this.model.find().populate('classification');
        return a;
    }

}
