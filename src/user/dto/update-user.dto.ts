import { IsString, IsEmail, IsOptional, MinLength} from 'class-validator';
import { Bytes } from 'web3';

export class UpdateUserDto{
  @IsString()
  @IsOptional()
  nome?: string;

  @IsString()
  @IsOptional()
  @MinLength(6, { message: 'Password must be at least 6 characters long' })
  senha?: string;

  @IsString()
  @IsOptional()
  departamento?: string;

  @IsString()
  @IsOptional()
  curso?: string;

  @IsOptional()
  fotoPerfil?: Buffer;
}
