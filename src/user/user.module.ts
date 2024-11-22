import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { User } from './entities/user.entity';
import { PrismaModule } from '../prisma-config/prisma.module';

@Module({
  imports: [TypeOrmModule.forFeature([User]), PrismaModule],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
