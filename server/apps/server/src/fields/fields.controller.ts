import { Controller } from '@nestjs/common';
import { Crud } from 'nestjs-mongoose-crud';
import { InjectModel } from 'nestjs-typegoose';
import { ApiTags } from '@nestjs/swagger';
import { Fields } from 'libs/db/models/fields.model';

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
    constructor(@InjectModel(Fields) private readonly model) { }
}
