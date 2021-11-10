import { IsNotEmpty, IsUrl, IsString } from 'class-validator';
export class CreateMovieDto {
  @IsString()
  name: string;

  @IsString()
  year: string;

  @IsString()
  length: string;

  @IsNotEmpty()
  storyline: string;

<<<<<<< HEAD
  @IsString()
  genre: string;

=======
>>>>>>> 80edcedc6dc2a4d3733d43c6664597a9b9d23e9a
  @IsUrl()
  image: string;
}
