import {
  Body,
  Controller,
  Post,
  Get,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { Movie } from '@prisma/client';
import { CreateMovieDto } from './dto/create-movie.dto';
import { MoviesService } from './movies.service';
import { UserRole } from 'src/users/enum/role.enum';
import { AuthGuard } from '@nestjs/passport';
import { Role } from '../auth/role.decorator';
import { RolesGuard } from 'src/auth/roles.guard';
import { User } from '@prisma/client';
import AuthUser from 'src/auth/auth-user.decorator';

@Controller('movies')
export class MoviesController {
  constructor(private service: MoviesService) {}

<<<<<<< HEAD
=======
  // Um usuário ADMIN logado pode criar um filme
>>>>>>> 80edcedc6dc2a4d3733d43c6664597a9b9d23e9a
  @Post('create')
  @Role(UserRole.ADMIN)
  @UseGuards(AuthGuard(), RolesGuard)
  createMovie(@Body() data: CreateMovieDto): Promise<Movie> {
    return this.service.create(data);
  }

<<<<<<< HEAD
=======
  // Qualquer usuário logado pode listar os filmes
>>>>>>> 80edcedc6dc2a4d3733d43c6664597a9b9d23e9a
  @Get('find-all')
  @UseGuards(AuthGuard())
  findMany(): Promise<Movie[]> {
    return this.service.findMany();
  }

<<<<<<< HEAD
=======
  // Qualquer usuário logado pode listar um filme pelo seu ID
>>>>>>> 80edcedc6dc2a4d3733d43c6664597a9b9d23e9a
  @Get('find/:id')
  @UseGuards(AuthGuard())
  findUnique(@Param('id') id: string): Promise<Movie> {
    return this.service.findUnique(id);
  }

<<<<<<< HEAD
=======
  // Um usuário ADMIN logado pode deletar um filme
>>>>>>> 80edcedc6dc2a4d3733d43c6664597a9b9d23e9a
  @Delete('delete/:id')
  @Role(UserRole.ADMIN)
  @UseGuards(AuthGuard(), RolesGuard)
  deleteOne(@Param('id') id: string): Promise<{ message: string }> {
    return this.service.deleteOne(id);
  }

<<<<<<< HEAD
=======
  // Usuário logado pode curtir um filme
>>>>>>> 80edcedc6dc2a4d3733d43c6664597a9b9d23e9a
  @Get('like/:id')
  @UseGuards(AuthGuard())
  likeMovie(
    @AuthUser() user: User,
    @Param('id') movieId: string,
  ): Promise<User> {
    const userId = user.id;
    return this.service.likeMovie(userId, movieId);
  }
}
