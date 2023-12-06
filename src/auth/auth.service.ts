import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../Users/user.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(email);
    if (user?.Password !== pass) {
      throw new UnauthorizedException('Mot de passe incorrect');
    }
    const payload = { sub: user.id_User, email: user.Email };
    return {
      access_token: await this.jwtService.signAsync(payload),
      id_User: user.id_User,
      name: user.Prenom + ' ' + user.Nom,
    };
  }
}
