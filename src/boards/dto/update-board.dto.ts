/**
 * DTO for updating an existing board
 *
 * @class UpdateBoardDto
 * @description Data transfer object that defines the optional fields that can be updated for a board
 */

import { IsOptional, IsString, MaxLength } from 'class-validator';

export class UpdateBoardDto {
  /**
   * The updated title of the board
   * @example "Updated Project Management"
   */
  @IsOptional()
  @IsString()
  @MaxLength(255)
  title?: string;

  /**
   * The updated description for the board
   * @example "Updated board for tracking project tasks"
   */
  @IsOptional()
  @IsString()
  description?: string;
}
