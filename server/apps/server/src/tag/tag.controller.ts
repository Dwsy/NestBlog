import {Controller, Get, Param} from '@nestjs/common';
import {Crud} from 'nestjs-mongoose-crud';
import {InjectModel} from 'nestjs-typegoose';
import {ApiTags} from '@nestjs/swagger';
import {Tag} from 'libs/db/models/tag.model';
import {ReturnModelType} from "@typegoose/typegoose";
import {Fields} from "libs/db/models/fields.model";
import {Contents} from "libs/db/models/contents.model";
import {Comments} from "libs/db/models/comments.model";

@Crud({
    model: Tag,
    routes: {
        create: false,
        update: false,
        delete: false
    }
})
@Controller('tag')
@ApiTags('标签')
export class TagController {
    constructor(@InjectModel(Tag) private readonly model: ReturnModelType<typeof Tag>,
                @InjectModel(Fields) private readonly fieldsModel: ReturnModelType<typeof Fields>
    ) {
    }

    article

    @Get('article/:ids')
    async get(@Param('ids') ids: Array<String>) {
        let a = this.fieldsModel.find({tag: {$all: ["603befa8b139000093003432", "603befa8b139000093003433"]}})
        // console.log(a);
        return this.fieldsModel.find({tag: { $all: ids}}).sort({'_id': -1})
    }
}
