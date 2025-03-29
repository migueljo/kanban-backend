/**
 * DTO for creating a new board
 *
 * @class CreateBoardDto
 * @description Data transfer object that defines the required fields when creating a new board
 */

import { IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';

export class CreateBoardDto {
  /**
   * The title of the board
   * @example "Project Management"
   */
  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  title: string;

  /**
   * An optional description for the board
   * @example "A board for tracking project tasks and progress"
   */
  @IsOptional()
  @IsString()
  description?: string;
}
