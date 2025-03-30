declare module 'drizzle-kit' {
  export interface Config {
    schema: string;
    out: string;
    dialect: 'postgresql';
    dbCredentials: {
      host: string;
      user: string;
      password: string;
      database: string;
      port: number;
    };
  }
}
