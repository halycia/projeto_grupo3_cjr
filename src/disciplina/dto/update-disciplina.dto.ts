import { IsOptional, IsString, MaxLength } from "class-validator";

export class UpdateDisciplinaDto {
    @MaxLength(140, {message: 'Tamanho máximo de 140 caracteres para nome de disciplina'})
    @IsString()
    @IsOptional()
    nome?: string;
}