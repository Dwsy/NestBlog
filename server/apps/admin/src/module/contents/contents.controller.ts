import {Controller, Get, Param, Put, Res, UseGuards} from '@nestjs/common';
import {Crud} from 'libs/nestjs-mongoose-crud';
import {InjectModel} from 'nestjs-typegoose';
import {ApiBearerAuth, ApiTags} from '@nestjs/swagger';
import {Contents} from 'libs/db/models/contents.model';
import {Fields} from 'libs/db/models/fields.model';
import {ReturnModelType} from '@typegoose/typegoose';
import {Tag} from 'libs/db/models/tag.model';
import {Classification} from 'libs/db/models/classification.model';
import {Comments} from 'libs/db/models/comments.model';
import {AuthGuard} from '@nestjs/passport';
import {Req} from '@nestjs/common/decorators/http/route-params.decorator';
import {JwtService} from '@nestjs/jwt';
import {User} from 'libs/db/models/user.model';
// import { CacheService } from '../../cache/cache.service';
import {ContentsService} from './contents.service';

@Crud({
    model: Contents,
    routes: {
        find: false,
        findOne: false,
        // update: false,
        // delete: false
    },
})
@Controller('api/contents')
@ApiTags('文章主体')
// extends PassportStrategy(Strategy)
export class ContentsController {
    constructor(
        @InjectModel(Contents) private readonly model,
        private jwtService: JwtService,
        @InjectModel(User) private userModel: ReturnModelType<typeof User>,
        @InjectModel(Fields) private readonly field: ReturnModelType<typeof Fields>,
        @InjectModel(Tag) private readonly tag: ReturnModelType<typeof Tag>,
        @InjectModel(Classification)
        private readonly classification: ReturnModelType<typeof Comments>,
        // private readonly cache: CacheService,
        private readonly contentsService: ContentsService,
    ) {
    }

    @Put('/created_toc/:id')
    @UseGuards(AuthGuard('jwt'))
    @ApiBearerAuth()
    createdToc(@Param('id') id: string) {
        return this.contentsService.createdToc(id);
    }

    @Get('/:id')
    async getContentById(@Param('id') id: string, @Req() request: Request) {
        return this.contentsService.getContentById(id, request);
    }

    //搜索2021-5-10 21:31:23
    @Get('search/s/:s')
    async search(@Param('s') s: string) {
        return this.contentsService.search(s);
    }
}
