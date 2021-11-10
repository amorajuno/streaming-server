import {
  IsString,
  Length,
  IsEmail,
  IsNotEmpty,
<<<<<<< HEAD
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
=======
  MaxLength,
  MinLength,
} from 'class-validator';
export class CreateUserDto {
  @IsString({ message: 'Informe um nome válido' })
  @MinLength(2, { message: 'Informe um valor maior que 2' })
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsEmail({}, { message: 'Informe um endereço de email válido' })
  @IsString()
  email: string;

  @Length(6, 16)
  @IsString({ message: 'Informe uma senha válida' })
  password: string;

  @Length(6, 16)
  @IsString({ message: 'Informe uma confirmação de senha válida' })
>>>>>>> 80edcedc6dc2a4d3733d43c6664597a9b9d23e9a
  passwordConfirmation: string;
}
