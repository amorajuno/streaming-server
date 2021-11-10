import { Controller, Body, Post, Get, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto, AuthResponse } from './dto/login.dto';
import AuthUser from './auth-user.decorator';
import { User } from '@prisma/client';
import { AuthGuard } from '@nestjs/passport';
<<<<<<< HEAD

=======
>>>>>>> 80edcedc6dc2a4d3733d43c6664597a9b9d23e9a
@Controller('auth')
export class AuthController {
  constructor(private service: AuthService) {}

<<<<<<< HEAD
=======
  // Qualquer usuário pode tentar fazer login
>>>>>>> 80edcedc6dc2a4d3733d43c6664597a9b9d23e9a
  @Post('login')
  login(@Body() data: LoginDto): Promise<AuthResponse> {
    return this.service.login(data);
  }

<<<<<<< HEAD
=======
  // Usuário atenticado pode ver seus dados (perfil)
>>>>>>> 80edcedc6dc2a4d3733d43c6664597a9b9d23e9a
  @Get('me')
  @UseGuards(AuthGuard())
  me(@AuthUser() user: User): User {
    return user;
  }
}
