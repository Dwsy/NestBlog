import { Body, Controller, Get, Post } from '@nestjs/common';
// import { Crud } from 'nestjs-mongoose-crud';
import { InjectModel } from 'nestjs-typegoose';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Comments } from 'libs/db/models/comments.model';
import { ReturnModelType } from '@typegoose/typegoose';


// @Crud({
//     model: Comments,
//     // routes: {
//     //     create: false,
//     //     update: false,
//     //     delete: false
//     // }
// })

@Controller('comments')
@ApiTags('评论')
export class CommentsController {
  constructor(
    @InjectModel(Comments) private commentModel: ReturnModelType<typeof Comment>,
  ) {}

  @Get('recently')
  @ApiOperation({summary:'请求最近评论'})
  getRecentlyComments(): string {
    return "test";
  }

  @Post()
  // @UseGuards(AuthGuard('jwt'))
  async create(@Body() dto) {
    // dto.user = user._id;
    return await this.commentModel.create(dto);
  }
}
