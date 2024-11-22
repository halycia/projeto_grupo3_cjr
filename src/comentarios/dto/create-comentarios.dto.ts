import { IsInt, IsNotEmpty, IsString, MaxLength } from "class-validator";

export class CreateComentariosDto {
    @IsInt()
    @IsNotEmpty()
    usuarioID: number;

    @IsInt()
    @IsNotEmpty()
    avaliacaoID: number;

    @MaxLength(280, {message: 'Maximum length of 280 characters'}) //tamanho de um tweet
    @IsString()
    @IsNotEmpty()
    conteudo: string;

}