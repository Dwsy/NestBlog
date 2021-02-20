import { Controller } from '@nestjs/common';
import { Crud } from 'nestjs-mongoose-crud';
import { InjectModel } from 'nestjs-typegoose';
import { ApiTags } from '@nestjs/swagger';
import { Tag } from 'libs/db/models/tag.model';

@Crud({
    // model:Comments,
    // model:Contents,
    // model:Fields,
    // model:SettingOptions,
    model:Tag,
    // model:UpFile,
    // model:User
  
})
@Controller('tag')
@ApiTags('标签')
export class TagController {
    constructor(@InjectModel(Tag) private readonly model) { }
}
