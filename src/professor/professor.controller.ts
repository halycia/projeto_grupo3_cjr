import { Controller } from '@nestjs/common';
import { ProfessorService } from './professor.service';

@Controller('professores')
export class ProfessorController {
  constructor(private readonly professorService: ProfessorService) {}
}
