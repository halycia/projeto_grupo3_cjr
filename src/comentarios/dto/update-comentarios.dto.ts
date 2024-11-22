import { IsInt, IsOptional, IsString, MaxLength } from "class-validator";

export class UpdateComentariosDto {
    @IsInt()
    @IsOptional()
    usuarioID?: number;

    @IsInt()
    @IsOptional()
    avaliacaoID?: number;

    @MaxLength(280, {message: 'Maximum length of 280 characters'}) //tamanho de um tweet
    @IsString()
    @IsOptional()
    conteudo?: string;
}