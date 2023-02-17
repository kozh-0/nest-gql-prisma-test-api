import { ObjectType, Field, Int } from '@nestjs/graphql';
// чтобы генерилась gql схема надо писать этот декоратор
@ObjectType()
export class Prop {
  @Field(() => Int)
  id: number;

  @Field()
  completed: boolean;

  @Field()
  type: string;
}
