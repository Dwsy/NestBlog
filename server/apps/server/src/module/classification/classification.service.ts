import {Injectable} from '@nestjs/common';

import {InjectModel} from 'nestjs-typegoose';
import {Classification} from 'libs/db/models/classification.model';
import {ReturnModelType} from '@typegoose/typegoose';
import {Comments} from 'libs/db/models/comments.model';
import {Fields} from 'libs/db/models/fields.model';
// import { ClassificationService } from './classification.service';
// import { Contents } from 'libs/db/models/contents.model';

@Injectable()
export class ClassificationService {
    constructor(
        @InjectModel(Classification)
        private readonly model: ReturnModelType<typeof Comments>,
        @InjectModel(Fields)
        private readonly FieldsModel: ReturnModelType<typeof Fields>,
    ) // @InjectModel(Contents) private readonly ContentsModel: ReturnModelType<typeof Comments>
    {
    }

    getClassificationById(id: string) {
        // @ts-ignore
        return this.FieldsModel.find({classification: id})
            .populate('tag')
            .populate('classification', 'name')
            .sort({_id: -1});
    }


    async addArticle(id: string, num: string) {
      console.log(id,num);
      
        await this.model.findByIdAndUpdate(id, {$inc: {contentsNum: num}});
    }
}
