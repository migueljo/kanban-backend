/**
 * DTO for creating a new board
 *
 * @class CreateBoardDto
 * @description Data transfer object that defines the required fields when creating a new board
 */

import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateBoardDto {
  /**
   * The title of the board
   * @example "Project Management"
   */
  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  name: string = '';
}
