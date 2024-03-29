import {
    Body,
    Controller,
    Get,
    Post,
    Delete,
    Put,
    UseGuards,
    HttpCode,
} from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import {
    ApiBearerAuth,
    ApiOperation,
    ApiTags,
} from '@nestjs/swagger';
import { Comments } from 'libs/db/models/comments.model';
import { Fields } from 'libs/db/models/fields.model';
import { Contents } from 'libs/db/models/contents.model';
// import { ModelType } from '@typegoose/typegoose/lib/types';
import { ReturnModelType } from '@typegoose/typegoose';
import { Param } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CommentsService } from './comments.service';
import { sendCommentDto } from './dto/sendCommentDto';
import { sendChildCommentDto } from './dto/sendChildCommentDto';
import swf from 'libs/utils/sensitiveWordFilter'


@Controller('api/comments')
@ApiTags('评论')
export class CommentsController {
    constructor(
        @InjectModel(Comments)
        private readonly CommentsModel: ReturnModelType<typeof Comments>,
        @InjectModel(Fields)
        private readonly fieldsModel: ReturnModelType<typeof Fields>,
        @InjectModel(Contents)
        private readonly contentsModel: ReturnModelType<typeof Fields>,
        private readonly commentsService: CommentsService,
    ) {
    }

    @Get()
    @ApiOperation({ summary: '请求all评论' })
    async getComments() {
        // this.CommentsModel.
        // return this.CommentsModel.find().populate('fieldsId', 'title').sort('_id',-1);
        return this.CommentsModel.find().sort({ _id: -1 });
    }

    @Get('recently')
    @ApiOperation({ summary: '请求最近5条评论' })
    async getRecentlyComments() {
        // this.CommentsModel.
        return this.CommentsModel.find({}, '-email -ip').limit(5).sort({ _id: -1 });
    }

    @Post()
    @ApiOperation({ summary: '发送评论' })
    async send(@Body() dto: sendCommentDto) {
        // @ts-ignore
        await this.fieldsModel.findByIdAndUpdate(
            (await this.contentsModel.findById(dto.contentsId, 'fieldsId'))['fieldsId'],
            { $inc: { commentsNum: 1 } },
        );
        // let swf=''
        // mint.filter(dto['authorName']).then((res) => {swf=res})
        dto['authorName'] = String((await swf.get().filter(dto['authorName'])).text)
        dto['text'] = String((await swf.get().filter(dto['text'])).text)
        // swf.setWordsOfCustom(['a','lex','陈睿'])
        // console.log(swf.get().filter(dto['authorName']));
        return this.CommentsModel.create(dto);
        // return await this.CommentsModel.create()
    }

    @Get('test/:text')
    async test(@Param('text') text: string) {
        swf.setWordsOfCustom(['a', 'lex', '陈睿'])
        // console.log(swf.get().filter(text));
        console.log(swf.get());

        return (await swf.get().filter(text)).text
        // let fieldsId = (await this.contentsModel.findById(id,'fieldsId')).fieldsId
        // let a = await this.fieldsModel.findByIdAndUpdate(fieldsId,{$inc:{"commentsNum":1}})
        // console.log(a)
        // return a
    }
    @Post('child')
    @ApiOperation({ summary: '发送子评论' })
    async sendChild(@Body() dto: sendChildCommentDto) {
        // @ts-ignore

        await this.fieldsModel.findByIdAndUpdate(
            (await this.contentsModel.findById(dto.contentsId, 'fieldsId'))['fieldsId'],
            { $inc: { commentsNum: 1 } },
        );
        dto['authorName'] = String((await swf.get().filter(dto['authorName'])).text)
        dto['text'] = String((await swf.get().filter(dto['text'])).text)
        let a = await this.CommentsModel.create(dto);
        // console.log((await a))
        // console.log((await a)._id)
        // console.log(dto.fatherId);

        return this.CommentsModel.findByIdAndUpdate(dto.fatherId, {
            $push: { childId: a._id },
        });
        // return await this.CommentsModel.create()
    }

    @UseGuards(AuthGuard('jwt'))
    @ApiBearerAuth()
    @Put(':id')
    @ApiOperation({ summary: '修改评论' })
    async put(@Param('id') id: string, @Body() dto: sendChildCommentDto) {
        return this.CommentsModel.findByIdAndUpdate(id, dto);
    }

    @Get(':id')
    async get(@Param('id') id: string) {
        let a = this.CommentsModel.find({ contentsId: id, isChild: false }, '-ip -email')
            .populate('childId', '-ip -email')
            .sort({ _id: -1 });
        console.log(a);

        // return this.CommentsModel.find(contentsId:id);
        return a;
    }

    @UseGuards(AuthGuard('jwt'))
    @ApiBearerAuth()
    @Delete(':id/:isChild')
    async del(@Param('id') id: string, @Param('isChild') isChild: String) {
        // return this.del(id, isChild);
        if (isChild === "true") {
            // @ts-ignore
            await this.fieldsModel.findByIdAndUpdate((await this.contentsModel.findById((await this.CommentsModel.findById(id, 'contentsId')).contentsId, 'fieldsId')).fieldsId, {$inc: {"commentsNum": -1}})
            await this.CommentsModel.findByIdAndDelete(id)
            return HttpCode(200)

        } else {
            // @ts-ignore
            await this.fieldsModel.findByIdAndUpdate((await this.contentsModel.findById((await this.CommentsModel.findById(id, 'contentsId')).contentsId, 'fieldsId')).fieldsId, {$inc: {"commentsNum": -((await this.CommentsModel.findById(id,'childId')).childId).length}})
            await this.CommentsModel.findByIdAndDelete(id)
            await this.CommentsModel.deleteMany({fatherId: id})
            return HttpCode(200)
        }
    }

    // @Post()
    // // @UseGuards(AuthGuard('jwt'))
    // async create(@Body() dto) {
    //   // dto.user = user._id;
    //   return await this.commentModel.create(dto);
    // }
}
