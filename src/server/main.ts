/// <reference path="../client/declaration.d.ts"/>
import { NestFactory } from '@nestjs/core';
import { AppModule } from './models/app/app.module';
import { NotFoundExceptionFilter } from "./filters/NotFoundExceptionFilter";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.useGlobalFilters(new NotFoundExceptionFilter());
    await app.listen(3000);
}
bootstrap();