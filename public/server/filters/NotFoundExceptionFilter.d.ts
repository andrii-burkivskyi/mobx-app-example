import { ExceptionFilter, ArgumentsHost } from "@nestjs/common";
export declare class NotFoundExceptionFilter implements ExceptionFilter {
    catch(exception: any, host: ArgumentsHost): Promise<void>;
}
