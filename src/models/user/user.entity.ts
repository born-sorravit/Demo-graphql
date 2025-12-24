import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
@ObjectType()
export class User {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => String, { nullable: false })
  @Column()
  name: string;

  @Field()
  @Column()
  surname: string;

  @Field()
  @Column()
  age: number;

  @Field()
  @Column({ unique: true })
  phone: string;

  @Field()
  @Column({ unique: true })
  email: string;
}
