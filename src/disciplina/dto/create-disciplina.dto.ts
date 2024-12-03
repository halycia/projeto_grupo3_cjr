import { IsNotEmpty, IsString, MaxLength } from "class-validator";

export class CreateDisciplinaDto {
    @MaxLength(140, {message: 'Tamanho máximo de 140 caracteres para nome de disciplina'})
    @IsString()
    @IsNotEmpty()
    nome: string;
}