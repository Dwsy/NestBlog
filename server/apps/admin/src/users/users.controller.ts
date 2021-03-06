import { Controller } from '@nestjs/common';
import { Crud } from 'nestjs-mongoose-crud';
import { InjectModel } from 'nestjs-typegoose';
import { ApiTags } from '@nestjs/swagger';

import { User } from 'libs/db/models/user.model';


@Crud({

    model: User,
    routes: {
        create: false,
        update: false,
        delete: false
    }
})
@Controller('api/users')
@ApiTags('用户')
export class UsersController {
    constructor(@InjectModel(User) private readonly model) { }
}
