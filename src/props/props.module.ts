import { Module } from '@nestjs/common';
import { PropsService } from './props.service';
import { PropsResolver } from './props.resolver';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [PropsResolver, PropsService, PrismaService],
})
export class PropsModule {}
