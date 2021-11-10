import { Module } from '@nestjs/common';
<<<<<<< HEAD
import { AuthModule } from './auth/auth.module';
import { MoviesModule } from './movies/movies.module';
import { UsersModule } from './users/users.module';
=======
import { UsersModule } from './users/users.module';
import { MoviesModule } from './movies/movies.module';
import { AuthModule } from './auth/auth.module';
>>>>>>> 80edcedc6dc2a4d3733d43c6664597a9b9d23e9a

@Module({
  imports: [UsersModule, MoviesModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
