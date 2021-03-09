"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrudConfig = exports.defaultPaginate = void 0;
const lodash_1 = require("lodash");
exports.defaultPaginate = {
    data: 'data',
    total: 'total',
    lastPage: 'lastPage',
    currentPage: 'page',
};
class CrudConfig {
    static setup(options) {
        this.options = lodash_1.merge({}, this.options, options);
    }
    static get(key, defaultValue = undefined) {
        return lodash_1.get(this.options, key, defaultValue);
    }
}
exports.CrudConfig = CrudConfig;
CrudConfig.options = {
    routes: {
        find: {
            paginate: { ...exports.defaultPaginate }
        }
    }
};
