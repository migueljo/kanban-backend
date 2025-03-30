/**
 * Database schema definitions using Drizzle ORM.
 * This file contains all table definitions and their relations.
 *
 * @module Schema
 * @description
 * Defines the complete database schema including tables and their relationships.
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
 * Boards table definition
 * @description
 * Represents kanban boards that users can create and manage.
 *
 * @property {serial} id - Unique identifier for the board
 * @property {varchar} name - Board name
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
 * Columns for the boards table
 */
export const boardsColumns = pgTable('boards_columns', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  boardId: integer('board_id')
    .notNull()
    .references(() => boards.id, { onDelete: 'cascade' }),
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
 * Defines relations for the boards table
 */
export const boardsRelations = relations(boards, ({ one, many }) => ({
  owner: one(users, {
    fields: [boards.ownerId],
    references: [users.id],
  }),
  columns: many(boardsColumns),
}));

/**
 * Defines relations for the boards columns table
 */
export const boardsColumnsRelations = relations(boardsColumns, ({ one }) => ({
  board: one(boards, {
    fields: [boardsColumns.boardId],
    references: [boards.id],
  }),
}));
