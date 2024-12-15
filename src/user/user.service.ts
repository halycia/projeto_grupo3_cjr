import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'prisma/prisma.service';
import * as bcrypt from 'bcrypt';
@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    const exists = await this.prisma.usuario.findUnique({
      where: { email: createUserDto.email },
    });
    if (exists) {
      throw new ConflictException('Usuario ja existe');
    }
    console.log('passowrd', createUserDto.senha);

    const hashPass = await bcrypt.hash(createUserDto.senha, 10);
    return await this.prisma.usuario.create({
      data: { ...createUserDto, senha: hashPass },
    });
  }

  async findAll() {
    return await this.prisma.usuario.findMany({
      select: {
        id: true,
        nome: true,
        email: true,
        createdAt: true,
        updatedAt: true,
        departamento: true,
        curso: true,
        fotoPerfil: true,
      },
    });
  }

  async findOne(id: number) {
    const usuario = await this.prisma.usuario.findUnique({ where: { id } });

    if (!usuario) {
      throw new NotFoundException('Usuario nao encontrado');
    }

    return await this.prisma.usuario.findUnique({
      where: { id },
      select: {
        id: true,
        nome: true,
        email: true,
        departamento: true,
        curso: true,
        fotoPerfil: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }
  async findByEmail(email: string) {
    const usuario = await this.prisma.usuario.findUnique({ where: { email } });

    if (!usuario) {
      return null;
    }
    return usuario;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const usuario = await this.prisma.usuario.findUnique({ where: { id } });

    if (!usuario) {
      throw new NotFoundException('Usuario nao encontrado');
    }

    const hashPass = await bcrypt.hash(updateUserDto.senha, 10);
    return await this.prisma.usuario.update({
      where: { id },
      data: { ...updateUserDto, senha: hashPass },
      select: {
        id: true,
        nome: true,
        email: true,
        departamento: true,
        curso: true,
        fotoPerfil: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }
  async remove(id: number) {
    const existe = await this.prisma.usuario.findUnique({ where: { id } });

    if (!existe) {
      throw new NotFoundException('Usuario nao encontrado');
    }
    return await this.prisma.usuario.delete({
      where: { id },
      select: {
        id: true,
        nome: true,
        email: true,
        departamento: true,
        curso: true,
        fotoPerfil: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }
}
