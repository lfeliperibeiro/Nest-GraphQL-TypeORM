import { BaseDTO } from '../../bases/dto/base.dto';
import { ObjectType } from '@nestjs/graphql';
import { FilterableField } from '@nestjs-query/query-graphql';

@ObjectType('Discipline')
export class DisciplineDTO extends BaseDTO {
  @FilterableField()
  name: string;
}
