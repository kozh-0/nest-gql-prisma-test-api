import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreatePropInput {
  @Field()
  type: string;

  @Field()
  completed: boolean;
}
