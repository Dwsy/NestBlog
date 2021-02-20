import { Controller } from '@nestjs/common';
import { Crud } from 'nestjs-mongoose-crud';
import { InjectModel } from 'nestjs-typegoose';
import { ApiTags } from '@nestjs/swagger';
import { Comments } from 'libs/db/models/comments.model';

@Crud({
    model:Comments,
    // model:Contents,
    // model:Fields,
    // model:SettingOptions,
    // model:Tag,
    // model:UpFile,
    // model:User
  
})

@Controller('comments')
@ApiTags('评论')
export class CommentsController {
    constructor(@InjectModel(Comments) private readonly model) { }
}
