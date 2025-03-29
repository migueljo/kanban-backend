/**
 * Root service of the application.
 * This service provides core business logic and data operations for the application.
 *
 * @module AppService
 * @description
 * The AppService is the main service that contains business logic for the application.
 * It provides methods for handling application-wide operations and data processing.
 */

import { Injectable } from '@nestjs/common';

/**
 * @Injectable decorator configuration
 * @description
 * Marks the class as a service that can be injected into other components.
 * This service is provided at the root level and is available throughout the application.
 */
@Injectable()
export class AppService {
  /**
   * Returns a greeting message
   * @description
   * Provides a simple greeting message for the application.
   * This method is used as a health check and basic endpoint response.
   *
   * @returns {string} A greeting message
   */
  getHello(): string {
    return 'Hello World!';
  }
}
