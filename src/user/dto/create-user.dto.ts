import { IsString, IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @MinLength(6, { message: 'Password must be at least 6 characters long' }) //escolhi 6 como tamanho apenas como base mas pode modificar
  senha: string;

  @IsString()
  @IsNotEmpty()
  departamento: string;

  @IsString()
  @IsNotEmpty()
  curso: string;

  @IsNotEmpty()
  fotoPerfil: Buffer; // Foto de perfil, se aplicável (em formato de URL ou caminho)
}
//esse modelo n é final criei apenas como exemplo e base
