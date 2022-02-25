import { ObjectType } from '@nestjs/graphql';
import { BaseDTO } from '../../bases/dto/base.dto';
import { FilterableField } from '@nestjs-query/query-graphql';

@ObjectType('Lesson')
export class LessonDTO extends BaseDTO {
  @FilterableField()
  description: string;
}
