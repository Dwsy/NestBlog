import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { Crud } from 'libs/nestjs-mongoose-crud';
import { InjectModel } from 'nestjs-typegoose';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Classification } from 'libs/db/models/classification.model';
import { ReturnModelType } from "@typegoose/typegoose";
import { Comments } from "libs/db/models/comments.model";
import { Fields } from "libs/db/models/fields.model";
import { AuthGuard } from "@nestjs/passport";
import { ClassificationService } from './classification.service';

// import { Contents } from 'libs/db/models/contents.model';


@Crud({
    model: Classification,
})

@Controller('api/classification')
@ApiTags('分类')
export class ClassificationController {
    constructor(@InjectModel(Classification) private readonly model: ReturnModelType<typeof Comments>,
        @InjectModel(Fields) private readonly FieldsModel: ReturnModelType<typeof Fields>,
        private readonly classificationService: ClassificationService
        // @InjectModel(Contents) private readonly ContentsModel: ReturnModelType<typeof Comments>
    ) { }

    @Get('article/:id')
    get(@Param('id') id: string) {
        // return this.CommentsModel.find(contentsId:id);
        return this.classificationService.getClassificationById(id)
    }
    @Get('contentsNum/:id/:num')
    @UseGuards(AuthGuard('jwt'))
    @ApiBearerAuth()
    addArticle(@Param('id') id: string, @Param('num') num: string) {
        this.addArticle(id, num)
    }

    // @Get('articleTitle/:id')
    // async articleTitle (@Param('id') id: string) {
    //     // return this.CommentsModel.find(contentsId:id);
    //     return this.ContentsModel.find({classification:id})
    // }
}
