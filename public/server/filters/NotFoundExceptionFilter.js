"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
let NotFoundExceptionFilter = class NotFoundExceptionFilter {
    catch(exception, host) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            const ctx = host.switchToHttp();
            const response = ctx.getResponse();
            if (((_a = exception) === null || _a === void 0 ? void 0 : _a.status) === common_1.HttpStatus.NOT_FOUND && ((_c = (_b = exception) === null || _b === void 0 ? void 0 : _b.path) === null || _c === void 0 ? void 0 : _c.includes("/index.html"))) {
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
        });
    }
};
NotFoundExceptionFilter = __decorate([
    common_1.Catch()
], NotFoundExceptionFilter);
exports.NotFoundExceptionFilter = NotFoundExceptionFilter;
//# sourceMappingURL=NotFoundExceptionFilter.js.map