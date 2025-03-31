/**
 * DTO for updating an existing user
 *
 * @class UpdateUserDto
 * @description Data transfer object that defines the optional fields that can be updated for a user
 */

import { IsEmail, IsOptional, IsString, MaxLength } from 'class-validator';

export class UpdateUserDto {
  /**
   * The updated full name of the user
   * @example "John Doe"
   */
  @IsOptional()
  @IsString()
  @MaxLength(255)
  name?: string;

  /**
   * The updated email address of the user
   * @example "john.doe@example.com"
   */
  @IsOptional()
  @IsEmail()
  @MaxLength(255)
  email?: string;
}
