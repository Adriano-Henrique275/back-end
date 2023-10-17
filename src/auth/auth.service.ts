import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { UserDTO } from 'src/users/user/dto/user.dto';

@Injectable()
export class AuthService {

  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(name: string, password: string): Promise<any> {
    const user = await this.usersService.findByUsername(name);

    if (!user) {
      throw new UnauthorizedException('Usuário ou Senha Inválidos');
    }

    const isValidPassword = await this.usersService.checkPassword(password, user.password);

    if(user && isValidPassword) {
      return user;
    }
    return null;
  }

  async signin(user: any) {
    const payload = {
      name: user.name,
      sub: user._id,
    };

    return { access_token: this.jwtService.sign(payload) };
  }

  async signUp(userDTO: UserDTO) {
    return this.usersService.create(userDTO);
  }
}
