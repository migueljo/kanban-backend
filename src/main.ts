/**
 * Main entry point of the application.
 * This file bootstraps the NestJS application and starts the server.
 */

import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';

import { AppModule } from './app.module';

/**
 * Bootstrap function that initializes and starts the NestJS application.
 * It creates the application instance, configures it, and starts listening on the specified port.
 *
 * @throws {Error} If the application fails to start
 */
async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'warn', 'log', 'debug', 'verbose'],
  });

  // Configure global validation pipe
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
    }),
  );

  const port = process.env.PORT ?? 3000;
  await app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}

// Start the application and handle any errors during startup
bootstrap().catch((error) => {
  console.error('Error starting the application:', error);
  process.exit(1);
});
