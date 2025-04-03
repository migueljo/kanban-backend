import type { Config } from 'drizzle-kit';
import * as dotenv from 'dotenv';
dotenv.config();

import baseConfig from './drizzle.config';

export default {
  ...baseConfig,
  dbCredentials: {
    ...baseConfig.dbCredentials,
    // @ts-expect-error
    ssl: false,
  },
} satisfies Config;
