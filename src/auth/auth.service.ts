import { LoginRequestBody } from './dto/loginRequestBody.dto';
import { JwtService } from '@nestjs/jwt';
import { UserService } from './../user/user.service';
import { Injectable, UnauthorizedException, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { UserToken } from './types/UserToken';
import * as bcrypt from 'bcrypt';
import { UserPayload, PartialUserPayload } from './types/UserPayload';
@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  async login(LoginRequestBody: LoginRequestBody): Promise<UserToken> {
    console.log('LoginRequestBody', LoginRequestBody);
    const user = await this.validateUser(
      LoginRequestBody.email,
      LoginRequestBody.senha,
    );

    if (!user) {
      throw new UnauthorizedException('Credenciais inválidas');
    }
    const payload: PartialUserPayload = {
      email: user.email,
      sub: user.id,
    };

    const token = this.jwtService.sign(payload, {
      expiresIn: '1d',
      secret: this.configService.get('JWT_SECRET'),
    });

    return { access_token: token };
  }

  async validateUser(email: string, senha: string) {
    console.log('email', email);
    try {
      const user = await this.userService.findByEmail(email);
      if (user) {
        const isValidPass = await bcrypt.compare(senha, user.senha);
        if (isValidPass) {
          return {
            ...user,
            senha: undefined,
          };
        }
      }
    } catch (error) {
      throw new UnauthorizedException('Credenciais inválidas');
    }
  }
}
