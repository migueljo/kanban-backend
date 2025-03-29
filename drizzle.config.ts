import type { Config } from 'drizzle-kit';

export default {
  schema: './src/db/schema/*',
  out: './drizzle',
  dialect: 'postgresql',
  dbCredentials: {
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
  },
} satisfies Config;
