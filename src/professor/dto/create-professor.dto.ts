import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateProfessorDto {
  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsString()
  @IsNotEmpty()
  departamento: string;

  disciplinasId?: number[];

  avaliacaoId?: number[];
}
