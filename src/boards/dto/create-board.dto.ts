/**
 * DTO for creating a new board
 *
 * @class CreateBoardDto
 * @description Data transfer object that defines the required fields when creating a new board
 */

import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';

export class CreateBoardDto {
  /**
   * The name of the board
   * @example "Project Management"
   */
  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  name: string = '';

  /**
   * The user ID of the board
   * @example 1
   */
  @IsNotEmpty()
  @IsNumber()
  userId: number;
}
