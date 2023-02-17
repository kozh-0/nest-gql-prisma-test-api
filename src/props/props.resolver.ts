import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PropsService } from './props.service';
import { Prop } from './entities/prop.entity';
import { CreatePropInput } from './dto/create-prop.input';
import { UpdatePropInput } from './dto/update-prop.input';

@Resolver(() => Prop)
export class PropsResolver {
  constructor(private readonly propsService: PropsService) {}

  @Mutation(() => Prop)
  createProp(@Args('createPropInput') createPropInput: CreatePropInput) {
    return this.propsService.create(createPropInput);
  }

  @Query(() => [Prop], { name: 'props' })
  findAll() {
    return this.propsService.findAll();
  }

  @Query(() => Prop, { name: 'prop' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.propsService.findOne(id);
  }

  @Mutation(() => Prop)
  updateProp(@Args('updatePropInput') updatePropInput: UpdatePropInput) {
    return this.propsService.update(updatePropInput.id, updatePropInput);
  }

  @Mutation(() => Prop)
  removeProp(@Args('id', { type: () => Int }) id: number) {
    return this.propsService.remove(id);
  }
}
