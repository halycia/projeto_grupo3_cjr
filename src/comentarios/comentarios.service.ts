import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Comentarios } from './entities/comentarios.entity';
import { CreateComentariosDto } from './dto/create-comentarios.dto';
import { UpdateComentariosDto } from './dto/update-comentarios.dto';
import { PrismaService } from 'src/prisma-config/prisma.service';

@Injectable()
export class ComentariosService {
  constructor(
    @InjectRepository(Comentarios)
    private readonly comentariosRepository: Repository<Comentarios>,
    private readonly prisma: PrismaService) { }

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
    throw new NotFoundException('Comentário inexistente');
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
    throw new NotFoundException('Comentário inexistente');
  }
}

  async remove(id: number) {
  const existe = await this.prisma.comentarios.findUnique({ where: { id } });

  if (existe) {
    return await this.prisma.comentarios.delete({
      where: { id },
    });
  } else {
    throw new NotFoundException('Comentário inexistente');
  }
}
}
