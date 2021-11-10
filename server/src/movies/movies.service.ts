import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Prisma, Movie, User } from '@prisma/client';

@Injectable()
export class MoviesService {
  constructor(private db: PrismaService) {}

  async create(data: Prisma.MovieCreateInput): Promise<Movie> {
    const movie = await this.db.movie.create({ data });
    return movie;
  }

  async findMany(): Promise<Movie[]> {
    const movies = await this.db.movie.findMany();
    return movies;
  }

<<<<<<< HEAD
  //tentando estruturar busca por nome parcial
  //   async findByName(name: string): Promise<Movie> {
  //     const movie = await this.db.movie.findFirst({
  //       where: { name },
  //     });

  //     return movie;
  //   }

=======
>>>>>>> 80edcedc6dc2a4d3733d43c6664597a9b9d23e9a
  async findUnique(id: string): Promise<Movie> {
    const movie = await this.db.movie.findUnique({
      where: { id },
    });

    if (!movie) {
<<<<<<< HEAD
      throw new NotFoundException('ID não encontrado');
=======
      throw new NotFoundException('ID Não encontrado na base de dados');
>>>>>>> 80edcedc6dc2a4d3733d43c6664597a9b9d23e9a
    }

    return movie;
  }

  async deleteOne(id: string): Promise<{ message: string }> {
    await this.db.movie.delete({
      where: { id },
    });

    return {
      message: 'Item deletado com sucesso',
    };
  }

  async likeMovie(userId: string, movieId: string): Promise<User> {
    await this.db.user.update({
      where: { id: userId },
      data: {
        movies: {
          connect: {
            id: movieId,
          },
        },
      },
    });

    return this.db.user.findUnique({
      where: { id: userId },
      include: {
        movies: true,
      },
    });
  }
}
