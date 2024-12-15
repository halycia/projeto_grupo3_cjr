import { IsInt, IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateComentariosDto {
  @IsInt()
  @IsNotEmpty()
  usuarioId: number;

  @IsInt()
  @IsNotEmpty()
  avaliacaoId: number;

  @MaxLength(280, {
    message: 'Tamanho máximo de 280 caracteres para conteudo de comentário',
  }) //tamanho de um tweet
  @IsString()
  @IsNotEmpty()
  conteudo: string;
}
