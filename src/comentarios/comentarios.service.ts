import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Comentarios } from './comentarios.entity';

@Injectable()
export class ComentariosService {
  constructor(
    @InjectRepository(Comentarios)
    private readonly comentariosRepository: Repository<Comentarios>,
  ) {}

  //bota os cruds aqui
}
