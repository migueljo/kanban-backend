/**
 * Entity representing a board in the system
 */
export class Board {
  /**
   * Unique identifier for the board
   * @example 1
   */
  id: number;

  /**
   * Title of the board
   * @example "Project Management"
   */
  title: string;

  /**
   * Optional description of the board
   * @example "A board for tracking project tasks and progress"
   */
  description?: string;

  /**
   * ID of the user who owns the board
   * @example 1
   */
  ownerId: number;

  /**
   * Timestamp when the board was created
   * @example "2023-01-01T00:00:00Z"
   */
  createdAt: Date;

  /**
   * Timestamp when the board was last updated
   * @example "2023-01-01T00:00:00Z"
   */
  updatedAt: Date;
}
