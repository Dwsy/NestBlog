"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrudQuery = exports.ICrudQuery = void 0;
const common_1 = require("@nestjs/common");
class ICrudQuery {
}
exports.ICrudQuery = ICrudQuery;
exports.CrudQuery = common_1.createParamDecorator((name = 'query', ctx) => {
    // const req = ctx.switchToHttp().getRequest();
    try {
        console.log(req.query[name]);
        return JSON.parse(req.query[name]);
    }
    catch (e) {
        return {};
    }
});
