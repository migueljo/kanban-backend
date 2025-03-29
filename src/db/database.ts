/**
 * Database configuration and connection setup.
 * This file initializes the PostgreSQL connection pool and creates a Drizzle ORM instance.
 *
 * @module Database
 * @description
 * Configures the database connection using environment variables with fallback values.
 * Implements SSL configuration for production environments and provides a global
 * database instance through Drizzle ORM.
 */

import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';

import * as schema from './schema/index';

/**
 * PostgreSQL connection pool configuration
 * Uses environment variables with fallback values for local development
 * Implements SSL configuration for production environments
 */
const pool = new Pool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'postgres',
  database: process.env.DB_NAME || 'kanban',
  port: Number(process.env.DB_PORT) || 5432,
  ssl:
    process.env.NODE_ENV === 'production'
      ? {
          rejectUnauthorized: true,
          ca: process.env.DB_SSL_CA,
        }
      : undefined,
});

/**
 * Drizzle ORM instance configured with the PostgreSQL pool
 * This instance is used throughout the application for database operations
 *
 * @type {DrizzleInstance} The configured Drizzle ORM instance
 */
export const db = drizzle(pool, { schema });
