import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateAvaliacaoDto {
  @IsNotEmpty()
  @IsNumber()
  id: number;

  @IsNotEmpty()
  @IsString()
  usuario: string;

  @IsNotEmpty()
  @IsNumber()
  usuarioId: number;

  @IsNotEmpty()
  @IsString()
  professor: string;

  @IsNotEmpty()
  @IsNumber()
  professorId: number;

  @IsNotEmpty()
  @IsString()
  disciplina: string;

  @IsNotEmpty()
  @IsNumber()
  disciplinaId: number;

  @IsNotEmpty()
  @IsString()
  conteudo: string;
}
