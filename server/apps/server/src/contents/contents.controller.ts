import { Controller } from '@nestjs/common';
import { Crud } from 'nestjs-mongoose-crud';
import { InjectModel } from 'nestjs-typegoose';
import { ApiTags } from '@nestjs/swagger';
import { Contents } from 'libs/db/models/contents.model';

@Crud({
    model: Contents,
    routes: {
        update: false,
        delete: false,
    },
})
@Controller('contents')
@ApiTags('文章主体')
export class ContentsController {
    constructor(@InjectModel(Contents) private readonly model) {
    }
}
