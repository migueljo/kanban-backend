/**
 * Database schema definitions using Drizzle ORM.
 * This file contains the table and column definitions for the application's database.
 *
 * @module Schema
 * @description
 * Defines the database schema using Drizzle ORM's type-safe schema builder.
 * Each table definition includes its columns, constraints, and relationships.
 */

import {
  pgTable,
  serial,
  text,
  timestamp,
  integer,
  varchar,
} from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

/**
 * Users table definition
 * @description
 * Represents the users in the system with their basic information.
 *
 * @property {serial} id - Unique identifier for the user
 * @property {text} name - User's full name
 * @property {text} email - User's unique email address
 * @property {timestamp} createdAt - Timestamp when the user was created
 * @property {timestamp} updatedAt - Timestamp when the user was last updated
 */
export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

/**
 * Defines relations for the users table
 */
export const usersRelations = relations(users, ({ many }) => ({
  boards: many(boards),
}));

/**
 * Boards table definition
 * @description
 * Represents kanban boards that users can create and manage.
 *
 * @property {serial} id - Unique identifier for the board
 * @property {varchar} title - Board title
 * @property {integer} ownerId - Reference to the user who owns the board
 * @property {timestamp} createdAt - Timestamp when the board was created
 * @property {timestamp} updatedAt - Timestamp when the board was last updated
 */
export const boards = pgTable('boards', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  ownerId: integer('owner_id')
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

/**
 * Defines relations for the boards table
 */
export const boardsRelations = relations(boards, ({ one }) => ({
  owner: one(users, {
    fields: [boards.ownerId],
    references: [users.id],
  }),
}));
