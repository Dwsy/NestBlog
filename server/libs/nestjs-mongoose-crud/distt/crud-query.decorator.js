"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
class ICrudQuery {
}
exports.ICrudQuery = ICrudQuery;
exports.CrudQuery = common_1.createParamDecorator((name = 'query', ctx) => {
    const req = ctx.switchToHttp().getRequest();
    try {
        return JSON.parse(req.query[name]);
    }
    catch (e) {
        return {};
    }
});
