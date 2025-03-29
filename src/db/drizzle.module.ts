/**
 * Global module that provides database connectivity throughout the application.
 * This module makes the Drizzle ORM instance available globally using dependency injection.
 *
 * @module DrizzleModule
 * @description
 * The DrizzleModule is a global module that provides a single database connection
 * instance to all other modules in the application. It uses the @Global() decorator
 * to make the database connection available without explicitly importing this module.
 */

import { Global, Module } from '@nestjs/common';
import { db } from './database';

/**
 * @Global() decorator makes this module's providers available globally
 * @Module decorator configuration
 * @property {Provider[]} providers - List of providers to instantiate
 *   - DB: Provides the Drizzle ORM instance as a global provider
 * @property {string[]} exports - List of providers to export
 *   - 'DB': Exports the database connection for use in other modules
 */
@Global()
@Module({
  providers: [
    {
      provide: 'DB',
      useValue: db,
    },
  ],
  exports: ['DB'],
})
export class DrizzleModule {}
