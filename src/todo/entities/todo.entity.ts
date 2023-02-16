import { ObjectType, Field, Int } from '@nestjs/graphql';
// чтобы генерилась gql схема надо писать этот декоратор
@ObjectType()
export class Todo {
  @Field(() => Int)
  id: number;

  @Field()
  title: string;
}
