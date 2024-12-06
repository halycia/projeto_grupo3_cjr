import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
  HttpCode,
  ParseIntPipe
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @HttpCode(201) // requisição foi bem sucedida: um novo recurso foi criado.
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  @HttpCode(200) // O recurso foi carregado e transmitido no corpo da mensagem.
  findAll() {
    return this.userService.findAll();
  }

  @Get('id')
  @HttpCode(200) // O recurso foi encontrado e retornado com sucesso.
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const user = await this.userService.findOne(id);
    if (!user) {// Lanca um erro 404: O recurso com o ID especificado não foi encontrado.
      throw new NotFoundException(`Get not possible. User with ${id} not found`)
    }
    return user;
  }

  @Patch('id')
  @HttpCode(200) // O recurso foi atualizado com sucesso e o recurso atualizado foi retornado.
  async update(@Param('id', ParseIntPipe) id: number, @Body() updateUserDto: UpdateUserDto) {
    const user = await this.userService.findOne(id);
    if (!user) {
      throw new NotFoundException(`Patch not possible. User with ${id} not found`)
    }
    return user;
  }

  @Delete('id')
  @HttpCode(204) // O recurso foi excluído com sucesso.
  async remove(@Param('id', ParseIntPipe) id: number) {
    const user = await this.userService.findOne(id);
    if (!user) {
      throw new NotFoundException(`Delete not possible. User with ${id} not found`)
    }
    return user;
  }
}
