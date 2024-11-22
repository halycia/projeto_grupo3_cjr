import { Controller } from '@nestjs/common';
import { DisciplinaService } from './disciplina.service';

@Controller('disciplinas')
export class DisciplinaController {
  constructor(private readonly disciplinaService: DisciplinaService) {}
}
