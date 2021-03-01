import { Controller } from '@nestjs/common';
import { Crud } from 'nestjs-mongoose-crud';
import { InjectModel } from 'nestjs-typegoose';
import { ApiTags } from '@nestjs/swagger';
import { Navigation } from 'libs/db/models/navigation.model';

@Crud({
    model:Navigation,

})

@Controller('navigation')
@ApiTags('博客导航设置')
export class NavigationController {
    constructor(@InjectModel(Navigation) private readonly model) { }

}
