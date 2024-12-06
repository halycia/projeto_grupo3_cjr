import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateComentariosDto } from './dto/create-comentarios.dto';
import { UpdateComentariosDto } from './dto/update-comentarios.dto';

@Injectable()
export class ComentariosService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createComentariosDto: CreateComentariosDto) {
    const comentario = await this.prisma.comentarios.create({
      data: {
        usuario: {
          connect: { id: createComentariosDto.usuarioID },
        },
        avaliacao: {
          connect: { id: createComentariosDto.avaliacaoID },
        },
        conteudo: createComentariosDto.conteudo,
      },
    });
    return comentario;
  }

  async findAll() {
    return await this.prisma.comentarios.findMany();
  }

  async findOne(id: number) {
    const comentario = await this.prisma.comentarios.findUnique({ where: { id } });

    if (comentario) {
      return comentario;
    } else {
      throw new NotFoundException(`Comentário com id ${id} não encontrado`);
    }
  }

  async update(id: number, updateComentariosDto: UpdateComentariosDto) {
    const comentario = await this.prisma.comentarios.findUnique({ where: { id } });

    if (comentario) {
      return await this.prisma.comentarios.update({
        where: { id },
        data: updateComentariosDto,
      });
    } else {
      throw new NotFoundException(`Comentário com id ${id} não encontrado`);
    }
  }

  async remove(id: number) {
    const comentario = await this.prisma.comentarios.findUnique({ where: { id } });

    if (comentario) {
      return await this.prisma.comentarios.delete({
        where: { id },
      });
    } else {
      throw new NotFoundException(`Comentário com id ${id} não encontrado`);
    }
  }
}
