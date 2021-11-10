import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { MoviesModule } from './movies/movies.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule, MoviesModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
