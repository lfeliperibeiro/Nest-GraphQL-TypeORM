import { BaseDTO } from '../../bases/dto/base.dto';
import { ObjectType } from '@nestjs/graphql';
import {
  FilterableField,
  FilterableOffsetConnection,
} from '@nestjs-query/query-graphql';
import { StudentDTO } from '../../students/dto/student.dto';

@ObjectType('Discipline')
@FilterableOffsetConnection('students', () => StudentDTO, {
  nullable: true,
})
export class DisciplineDTO extends BaseDTO {
  @FilterableField()
  name: string;
}
