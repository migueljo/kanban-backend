/**
 * DTO for creating a new user
 *
 * @class CreateUserDto
 * @description Data transfer object that defines the required fields when creating a new user
 */

import { IsEmail, IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateUserDto {
  /**
   * The full name of the user
   * @example "John Doe"
   */
  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  name!: string;

  /**
   * The email address of the user
   * @example "john.doe@example.com"
   */
  @IsNotEmpty()
  @IsEmail()
  @MaxLength(255)
  email!: string;
}
