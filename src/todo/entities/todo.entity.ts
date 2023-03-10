import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Prop } from 'src/props/entities/prop.entity';
// чтобы генерилась gql схема надо писать этот декоратор
@ObjectType()
export class Todo {
  @Field(() => Int)
  id: number;

  @Field()
  title: string;

  @Field((type) => [Prop], { nullable: true })
  props: Prop[];

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
