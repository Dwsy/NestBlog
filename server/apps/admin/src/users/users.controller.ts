import { Controller } from '@nestjs/common';
import { Crud } from 'nestjs-mongoose-crud';
import { InjectModel } from 'nestjs-typegoose';
import { ApiTags } from '@nestjs/swagger';

import { User } from 'libs/db/models/user.model';
// import { Contents } from 'libs/db/models/contents.model';
// import { Fields } from 'libs/db/models/fields.model';
// import { UpFile } from 'libs/db/models/upfile.model';
// import { Tag } from 'libs/db/models/tag.model';
// import { SettingOptions } from 'libs/db/models/settingoptions.model';
// import { Comments } from 'libs/db/models/comments.model';


@Crud({
    // model:Comments,
    // model:Contents,
    // model:Fields,
    // model:SettingOptions,
    // model:Tag,
    // model:UpFile,
    model:User
  
})
@Controller('users')
@ApiTags('用户')
export class UsersController {
    constructor(@InjectModel(User) private readonly model) { }
}
