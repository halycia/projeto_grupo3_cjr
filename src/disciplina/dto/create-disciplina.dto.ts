import { IsArray, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateDisciplinaDto {
  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsOptional()
  @IsArray()
  professorId?: number[];

  @IsOptional()
  @IsArray()
  avaliacaoId?: number[];
}
