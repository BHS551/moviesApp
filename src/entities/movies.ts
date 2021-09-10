import { BaseEntity, Column, Entity, ObjectIdColumn } from "typeorm";

@Entity()
export default class Movie {
  @ObjectIdColumn()
  _id: String;

  @Column({
    type: 'varchar',
    nullable: false,
    length: 50
  })
  name: String

  @Column({
    type: 'varchar',
    nullable: false,
    length: 50
  })
  author: String
}