import { Controller } from '@nestjs/common';
import { Crud } from 'libs/nestjs-mongoose-crud';
import { InjectModel } from 'nestjs-typegoose';
import { ApiTags } from '@nestjs/swagger';
import { Links } from 'libs/db/models/links.model';

@Crud({
    model: Links,

})
@Controller('api/links')
@ApiTags('友情链接')
export class LinksController {
    constructor(@InjectModel(Links) private readonly model) { }
}
