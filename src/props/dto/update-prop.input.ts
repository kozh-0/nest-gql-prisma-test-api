import { CreatePropInput } from './create-prop.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdatePropInput extends PartialType(CreatePropInput) {
  @Field(() => Int)
  id: number;
  type: string;
  completed: boolean;
}
