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

  @IsString()
  genre: string;

  @IsUrl()
  image: string;
}
