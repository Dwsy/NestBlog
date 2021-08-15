import {Body, Controller, Get, Param, Post, UseGuards} from '@nestjs/common';
import {Crud} from 'libs/nestjs-mongoose-crud';
import {InjectModel} from 'nestjs-typegoose';
import {ApiBearerAuth, ApiTags} from '@nestjs/swagger';
import {Tag} from 'libs/db/models/tag.model';
import {ReturnModelType} from "@typegoose/typegoose";
import {Fields} from "libs/db/models/fields.model";
import {AuthGuard} from "@nestjs/passport";
import { TagService } from './tag.service';


class contentsNum{
    tagId:Array<string>
    num:number
}

@Crud({
    model: Tag,
    // routes: {
    //     create: false,
    //     update: false,
    //     delete: false
    // }
})
@Controller('api/tag')
@ApiTags('标签')
export class TagController {
    constructor(@InjectModel(Tag) private readonly model: ReturnModelType<typeof Tag>,
                @InjectModel(Fields) private readonly fieldsModel: ReturnModelType<typeof Fields>,
                private readonly tagService: TagService
    ) {
    }



    @Get('article/:ids')
    async get(@Param('ids') ids: Array<String>) {
        return this.fieldsModel.find({tag: { $all: ids}}).sort({'_id': -1}).populate('tag')
    }
    @Post('contentsNum/')
    async test (@Body()dto:contentsNum) {
        for (let i = 0; i < dto.tagId.length; i++) {
            let a = await  this.model.findByIdAndUpdate(dto.tagId[i],{$inc:{"contentsNum":dto.num}})
        }
    }
}
