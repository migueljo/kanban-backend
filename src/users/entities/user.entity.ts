/**
 * Entity representing a user in the system
 */
export class User {
  /**
   * Unique identifier for the user
   * @example 1
   */
  id!: number;

  /**
   * Full name of the user
   * @example "John Doe"
   */
  name!: string;

  /**
   * Email address of the user
   * @example "john.doe@example.com"
   */
  email!: string;

  /**
   * Timestamp when the user was created
   * @example "2023-01-01T00:00:00Z"
   */
  createdAt!: Date;

  /**
   * Timestamp when the user was last updated
   * @example "2023-01-01T00:00:00Z"
   */
  updatedAt!: Date;
}
