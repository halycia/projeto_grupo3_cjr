import { PartialType } from '@nestjs/mapped-types';
//criar type e partial type de userpayload para usar somente sub e email
export class UserPayload {
  sub: number;
  email: string;
  createdAt: string;
  expire: string;
}
export class PartialUserPayload extends PartialType(UserPayload) {}
