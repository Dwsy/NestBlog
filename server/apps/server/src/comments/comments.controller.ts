import { Body, Controller, Get, Post } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Comments } from 'libs/db/models/comments.model';
// import { ModelType } from '@typegoose/typegoose/lib/types';
import { ReturnModelType } from '@typegoose/typegoose';
import { Param } from '@nestjs/common';



@Controller('comments')
@ApiTags('评论')
export class CommentsController {
  constructor(@InjectModel(Comments) private readonly CommentsModel: ReturnModelType<typeof Comments>) {}



  @Get('recently')
  @ApiOperation({ summary: '请求最近5条评论' })
  getRecentlyComments() {
    // this.CommentsModel.
    return this.CommentsModel.find().limit(5).sort({'_id':-1})
  }

  @Get(':id')
  async get (@Param('id') id: string) {

    // return this.CommentsModel.find(contentsId:id);
    return this.CommentsModel.find({contentsId: id}).sort({'_id': -1});
  }


  // @Post()
  // // @UseGuards(AuthGuard('jwt'))
  // async create(@Body() dto) {
  //   // dto.user = user._id;
  //   return await this.commentModel.create(dto);
  // }
}
