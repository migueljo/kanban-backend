declare module '@nestjs/swagger' {
  export function ApiTags(...tags: string[]): ClassDecorator;

  export interface ApiOperationOptions {
    summary?: string;
    description?: string;
    [key: string]: any;
  }

  export function ApiOperation(options: ApiOperationOptions): MethodDecorator;

  export interface ApiResponseOptions {
    status: number;
    description?: string;
    type?: any;
    schema?: any;
    isArray?: boolean;
    [key: string]: any;
  }

  export function ApiResponse(options: ApiResponseOptions): MethodDecorator;

  export function ApiOkResponse(
    options?: Omit<ApiResponseOptions, 'status'>,
  ): MethodDecorator;
  export function ApiCreatedResponse(
    options?: Omit<ApiResponseOptions, 'status'>,
  ): MethodDecorator;
  export function ApiBadRequestResponse(
    options?: Omit<ApiResponseOptions, 'status'>,
  ): MethodDecorator;
  export function ApiUnauthorizedResponse(
    options?: Omit<ApiResponseOptions, 'status'>,
  ): MethodDecorator;
  export function ApiNotFoundResponse(
    options?: Omit<ApiResponseOptions, 'status'>,
  ): MethodDecorator;
  export function ApiForbiddenResponse(
    options?: Omit<ApiResponseOptions, 'status'>,
  ): MethodDecorator;
  export function ApiBody(options: { type: any }): MethodDecorator;
  export function ApiParam(options: {
    name: string;
    type?: any;
  }): MethodDecorator;
  export function ApiQuery(options: {
    name: string;
    type?: any;
  }): MethodDecorator;

  export function DocumentBuilder(): DocumentBuilderInterface;

  export interface DocumentBuilderInterface {
    setTitle(title: string): this;
    setDescription(description: string): this;
    setVersion(version: string): this;
    addTag(tag: string, description?: string): this;
    build(): any;
  }

  export const SwaggerModule: {
    createDocument(app: any, config: any, options?: any): any;
    setup(path: string, app: any, document: any, options?: any): void;
  };
}
