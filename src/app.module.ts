/**
 * Root module of the application.
 * This module serves as the main configuration point for the NestJS application,
 * importing and configuring all necessary modules, controllers, and services.
 *
 * @module AppModule
 * @description
 * The AppModule is the root module that bootstraps the application.
 * It imports the DrizzleModule for database operations and declares
 * the main application controllers and services.
 */

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DrizzleModule } from './db/drizzle.module';
import { BoardsModule } from './boards/boards.module';

/**
 * @Module decorator configuration
 * @property {Module[]} imports - List of modules to import
 *   - DrizzleModule: Provides database connectivity and ORM functionality
 *   - BoardsModule: Provides board related functionality
 * @property {Controller[]} controllers - List of controllers to instantiate
 *   - AppController: Handles HTTP requests for the root endpoints
 * @property {Provider[]} providers - List of providers to instantiate
 *   - AppService: Contains business logic for the application
 */
@Module({
  imports: [DrizzleModule, BoardsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
