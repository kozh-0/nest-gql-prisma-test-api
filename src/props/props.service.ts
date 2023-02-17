import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePropInput } from './dto/create-prop.input';
import { UpdatePropInput } from './dto/update-prop.input';

@Injectable()
export class PropsService {
  constructor(private prisma: PrismaService) {}

  create(createPropInput: CreatePropInput) {
    return this.prisma.props.create({
      data: {
        completed: createPropInput.completed,
        type: createPropInput.type,
      },
    });
  }

  findAll() {
    return this.prisma.props.findMany();
  }

  findOne(id: number) {
    return this.prisma.props.findUnique({ where: { id } });
  }

  update(id: number, updatePropInput: UpdatePropInput) {
    return this.prisma.props.update({
      where: { id },
      data: {
        completed: updatePropInput.completed,
        type: updatePropInput.type,
      },
    });
  }

  remove(id: number) {
    return this.prisma.props.delete({ where: { id } });
  }
}
