import { Controller } from '@nestjs/common';
import { Crud } from 'nestjs-mongoose-crud';
import { InjectModel } from 'nestjs-typegoose';
import { ApiTags } from '@nestjs/swagger';
import { Classification } from 'libs/db/models/classification.model';

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
    constructor(@InjectModel(Classification) private readonly model) { }
}
