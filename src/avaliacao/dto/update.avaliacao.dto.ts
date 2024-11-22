import { IsOptional, IsString, IsInt } from 'class-validator';

export class UpdateAvaliacaoDto {
  @IsOptional()
  @IsString()
  conteudo?: string;

  @IsOptional()
  @IsInt()
  usuarioId?: number;

  @IsOptional()
  @IsInt()
  professorId?: number;

  @IsOptional()
  @IsInt()
  disciplinaId?: number;
}
