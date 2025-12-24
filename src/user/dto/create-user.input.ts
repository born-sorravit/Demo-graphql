import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field()
  name: string;

  @Field()
  surname: string;

  @Field()
  phone: string;

  @Field()
  age: number;

  @Field()
  email: string;
}
