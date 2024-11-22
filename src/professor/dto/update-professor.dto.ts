import { IsString, IsOptional, MinLength } from 'class-validator';

export class UpdateProfessorDto {
  @IsString()
  @IsOptional()
  nome?: string;

  @IsString()
  @IsOptional()
  departamento?: string;

}