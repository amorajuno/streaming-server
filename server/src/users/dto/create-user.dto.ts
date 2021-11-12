import {
  IsString,
  Length,
  IsEmail,
  IsNotEmpty,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @MinLength(2, { message: 'O nome deve conter pelo menos 2 caracteres.' })
  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  @IsEmail({}, { message: 'Por favor informe um e-mail válido' })
  @IsString()
  email: string;

  @Length(6, 16, { message: 'Deve conter entre 6 e 16' })
  @IsString()
  password: string;

  @Length(6, 16, { message: 'Deve conter entre 6 e 16' })
  @IsString()

  passwordConfirmation: string;
}
