import { InputType, Field } from '@nestjs/graphql';
import { Prop } from 'src/props/entities/prop.entity';

@InputType()
export class CreateTodoInput {
  @Field()
  title: string;

  @Field(() => [Prop])
  props: Prop[];
}
