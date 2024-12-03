import { IsInt, IsNotEmpty, IsString, MaxLength } from "class-validator";

export class CreateComentariosDto {
    @IsInt()
    @IsNotEmpty()
    usuarioID: number;

    @IsInt()
    @IsNotEmpty()
    avaliacaoID: number;

    @MaxLength(280, {message: 'Tamanho máximo de 280 caracteres para conteudo de comentário'}) //tamanho de um tweet
    @IsString()
    @IsNotEmpty()
    conteudo: string;

}