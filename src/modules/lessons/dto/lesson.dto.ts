import { ObjectType } from '@nestjs/graphql';
import { BaseDTO } from '../../bases/dto/base.dto';
import {
  FilterableField,
  FilterableOffsetConnection,
} from '@nestjs-query/query-graphql';
import { ContentDTO } from '../../contents/dto/content.dto';

@ObjectType('Lesson')
@FilterableOffsetConnection('contents', () => ContentDTO, { nullable: true })
export class LessonDTO extends BaseDTO {
  @FilterableField()
  description: string;
}
