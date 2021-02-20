import { Controller } from '@nestjs/common';
import { Crud } from 'nestjs-mongoose-crud';
import { InjectModel } from 'nestjs-typegoose';
import { ApiTags } from '@nestjs/swagger';
import { UpFile } from 'libs/db/models/upfile.model';

@Crud({
    // model:Comments,
    // model:Contents,
    // model:Fields,
    // model:SettingOptions,
    // model:Tag,
    model:UpFile,
    // model:User
  
})
@Controller('upfile')
@ApiTags('上传文件')
export class UpfileController {
    constructor(@InjectModel(UpFile) private readonly model) { }
}
