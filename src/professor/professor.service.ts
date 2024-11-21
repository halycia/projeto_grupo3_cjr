import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Professor } from './professor.entity';

@Injectable()
export class ProfessorService {
  constructor(
    @InjectRepository(Professor)
    private readonly professorRepository: Repository<Professor>,
  ) {}

  // bota os cruds aqui
}
