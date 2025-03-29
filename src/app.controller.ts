/**
 * Root controller of the application.
 * This controller handles the root-level HTTP endpoints of the application.
 *
 * @module AppController
 * @description
 * The AppController is the main controller that handles requests to the root path.
 */

import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

/**
 * @Controller decorator configuration
 * @description
 * Handles HTTP requests at the root path ('/')
 * Uses dependency injection to receive the AppService instance
 */
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  /**
   * Root endpoint handler
   * @description
   * Handles GET requests to the root path ('/')
   * Returns a greeting message from the AppService
   *
   * @returns {string} A greeting message
   */
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  /**
   * Health check endpoint handler
   * @description
   * Handles GET requests to the '/health' path
   * Returns a simple 'OK' status for health checks
   *
   * @returns {string} A 'OK' status
   */
  @Get('health')
  getHealth(): string {
    return 'OK';
  }
}
