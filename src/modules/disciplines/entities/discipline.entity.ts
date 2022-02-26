import { Column, Entity, ManyToMany } from 'typeorm';
import { BaseEntity } from '../../bases/entities/base.entity';
import { Student } from '../../students/entities/student.entity';
import { JoinTable } from 'typeorm';

@Entity()
export class Discipline extends BaseEntity {
  @Column()
  name: string;

  @ManyToMany(() => Student, (students) => students.disciplines, {
    nullable: true,
  })
  @JoinTable()
  students: Student[];
}
