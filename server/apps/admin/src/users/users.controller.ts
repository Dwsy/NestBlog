import { Controller } from '@nestjs/common';
import { User } from 'libs/db/models/user.model';
import { Crud } from 'nestjs-mongoose-crud';
import { InjectModel } from 'nestjs-typegoose';
import { ApiTags } from '@nestjs/swagger';


@Crud({
    model: User
})
@Controller('users')
@ApiTags('用户')
export class UsersController {
    constructor(@InjectModel(User) private readonly model) { }
}
