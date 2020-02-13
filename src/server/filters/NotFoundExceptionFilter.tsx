import { Catch, ExceptionFilter, ArgumentsHost, HttpStatus } from "@nestjs/common";

@Catch()
export class NotFoundExceptionFilter implements ExceptionFilter {
    async catch(exception: any, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        if (exception?.status === HttpStatus.NOT_FOUND && exception?.path?.includes("/index.html")) {
            const html = `
                <!DOCTYPE html>
                <html>
                <head>
                    <meta charset="UTF-8">
                    <title>App generator</title>
                </head>
                <body>
                    <div id="root"></div>
                    <script src="/client/main.js"></script>
                    <script src="/client/vendors.chunk.js"></script>
                    <script src="/client/core.chunk.js"></script>
                </body>
                </html>
            `;

            response.send(html);
        }
    }
}