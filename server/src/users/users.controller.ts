import {
<<<<<<< HEAD
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { User } from '@prisma/client';
import { UserRole } from './enum/role.enum';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from 'src/auth/roles.guard';
import { Role } from 'src/auth/role.decorator';

@Controller('users')
export class UsersController {
  constructor(private readonly service: UsersService) {}

  //registro
  @Post('new')
=======
  Controller,
  Body,
  Post,
  Get,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { User } from '@prisma/client';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { UserRole } from './enum/role.enum';
import { AuthGuard } from '@nestjs/passport';
import { Role } from 'src/auth/role.decorator';
import { RolesGuard } from 'src/auth/roles.guard';

@Controller('user')
export class UsersController {
  constructor(private service: UsersService) {}

  // Qualquer usuário não logado pode criar um novo usuário no nosso serviço
  @Post('register')
>>>>>>> 80edcedc6dc2a4d3733d43c6664597a9b9d23e9a
  createUser(@Body() data: CreateUserDto): Promise<User> {
    delete data.passwordConfirmation;
    return this.service.create(data, UserRole.USER);
  }

<<<<<<< HEAD
  //new admin
=======
  // Um usuário ADMIN logado pode criar um outro usuário ADMIN
>>>>>>> 80edcedc6dc2a4d3733d43c6664597a9b9d23e9a
  @Post('create-admin')
  @Role(UserRole.ADMIN)
  @UseGuards(AuthGuard(), RolesGuard)
  createAdmin(@Body() data: CreateUserDto): Promise<User> {
    delete data.passwordConfirmation;
    return this.service.create(data, UserRole.ADMIN);
  }

<<<<<<< HEAD
=======
  // Um usuário comum logado pode buscar um outro usuário pelo ID
>>>>>>> 80edcedc6dc2a4d3733d43c6664597a9b9d23e9a
  @Get('find/:id')
  @UseGuards(AuthGuard())
  findOne(@Param('id') id: string): Promise<User> {
    return this.service.findOne(id);
  }

<<<<<<< HEAD
  @Get('find/name/:username')
  @UseGuards(AuthGuard())
  findOneByName(@Param('username') username: string): Promise<User> {
    return this.service.findOneByName(username);
  }

=======
  // Um usuário comum logado pode buscar por todos os usuários cadastrados
>>>>>>> 80edcedc6dc2a4d3733d43c6664597a9b9d23e9a
  @Get('find-all')
  @UseGuards(AuthGuard())
  findMany() {
    return this.service.findMany();
  }

<<<<<<< HEAD
  @Get('super-find-all')
  @Role(UserRole.ADMIN)
  @UseGuards(AuthGuard(), RolesGuard)
  findAll() {
    return this.service.findAll();
  }

=======
  // Um usuário admin logado pode deletar a conta de algum outro usuário
>>>>>>> 80edcedc6dc2a4d3733d43c6664597a9b9d23e9a
  @Delete('delete/:id')
  @Role(UserRole.ADMIN)
  @UseGuards(AuthGuard(), RolesGuard)
  deleteOne(@Param('id') id: string): Promise<{ message: string }> {
    return this.service.deleteOne(id);
  }
}
