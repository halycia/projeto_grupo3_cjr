import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateAvaliacaoDto {
  @IsNotEmpty()
  @IsNumber()
  usuarioId: number;

  @IsNotEmpty()
  @IsNumber()
  professorId: number;

  @IsNotEmpty()
  @IsNumber()
  disciplinaId: number;

  @IsNotEmpty()
  @IsString()
  conteudo: string;
}
