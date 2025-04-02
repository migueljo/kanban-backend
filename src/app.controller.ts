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
@Controller('')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
