import { BaseEntity, Column, Entity, ObjectIdColumn } from "typeorm";

@Entity()
export class Movie extends BaseEntity {
  @ObjectIdColumn()
  id: String;

  @Column({
    type: 'varchar',
    nullable: false,
    length: 50
  })
  name: string

  @Column({
    type: 'varchar',
    nullable: false,
    length: 50
  })
  author: string
}