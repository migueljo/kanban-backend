/**
 * Entity representing a board in the system
 */
export class Board {
  /**
   * Unique identifier for the board
   * @example 1
   */
  id!: number;

  /**
   * Name of the board
   * @example "Project Management"
   */
  name!: string;

  /**
   * ID of the user who owns the board
   * @example 1
   */
  ownerId!: number;

  /**
   * Timestamp when the board was created
   * @example "2023-01-01T00:00:00Z"
   */
  createdAt!: Date;

  /**
   * Timestamp when the board was last updated
   * @example "2023-01-01T00:00:00Z"
   */
  updatedAt!: Date;
}
