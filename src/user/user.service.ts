import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '../prisma-config/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    const usuario = this.prisma.usuario.create({
      data: createUserDto,
    });
    return usuario;
  }

  async findAll() {
    return await this.prisma.usuario.findMany();
  }

  async findOne(id: number) {
    const usuario = await this.prisma.usuario.findUnique({ where: { id } });

    if (usuario) {
      return usuario;
    } else {
      throw new NotFoundException('Usuário não cadastrado');
    }
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const usuario = await this.prisma.usuario.findUnique({ where: { id } });

    if (usuario) {
      return await this.prisma.usuario.update({
        where: { id },
        data: updateUserDto,
      });
    } else {
      throw new NotFoundException('Usuário não cadastrado');
    }
  }

  async remove(id: number) {
    const existe = await this.prisma.usuario.findUnique({ where: { id } });

    if (existe) {
      return await this.prisma.usuario.delete({
        where: { id },
      });
    } else {
      throw new NotFoundException('Usuário não cadastrado');
    }
  }
}
