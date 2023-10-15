import {
  IsNotEmpty,
  IsString,
  IsEmail,
  Matches,
  Length,
} from 'class-validator';
export class SignupDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @Matches(/^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/)
  phone: string;

  @IsEmail()
  email: string;

  @IsString()
  @Length(5, 50)
  password: string;
}
