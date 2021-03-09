"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crud_controller_1 = require("./crud.controller");
const constants_1 = require("@nestjs/common/constants");
const lodash_1 = require("lodash");
const crud_config_1 = require("./crud-config");
const CRUD_ROUTES = {
    config: 'config',
    find: 'find',
    findOne: 'findOne',
    create: 'create',
    update: 'update',
    delete: 'delete',
};
const allMethods = Object.values(CRUD_ROUTES);
function cloneDecorators(from, to) {
    Reflect.getMetadataKeys(from).forEach(key => {
        const value = Reflect.getMetadata(key, from);
        Reflect.defineMetadata(key, value, to);
    });
}
function clonePropDecorators(from, to, name) {
    Reflect.getMetadataKeys(from, name).forEach(key => {
        const value = Reflect.getMetadata(key, from, name);
        Reflect.defineMetadata(key, value, to, name);
    });
}
exports.Crud = (options) => {
    options = lodash_1.merge({}, crud_config_1.CrudConfig.options, options);
    return target => {
        const Controller = target;
        const controller = target.prototype;
        const crudController = new crud_controller_1.CrudController(options.model);
        controller.crudOptions = options;
        const methods = allMethods.filter(v => lodash_1.get(options, `routes.${v}`) !== false);
        for (let method of methods) {
            if (controller[method]) {
                continue;
            }
            if (!options.config && method === CRUD_ROUTES.config) {
                continue;
            }
            controller[method] = function test(...args) {
                return crudController[method].apply(this, args);
            };
            Object.defineProperty(controller[method], 'name', {
                value: method
            });
            // clone instance decorators
            cloneDecorators(crudController, controller);
            cloneDecorators(crudController[method], controller[method]);
            // clone instance method decorators
            clonePropDecorators(crudController, controller, method);
            // clone class "method" decorators
            clonePropDecorators(crud_controller_1.CrudController, Controller, method);
            // get exists param types
            const types = Reflect.getMetadata(constants_1.PARAMTYPES_METADATA, controller, method);
            Reflect.decorate([
                // replace fake dto to real dto
                Reflect.metadata(constants_1.PARAMTYPES_METADATA, types.map((v) => {
                    if (lodash_1.get(v, 'name') === crud_controller_1.CrudPlaceholderDto.name) {
                        return lodash_1.get(options, `routes.${method}.dto`, options.model);
                    }
                    return v;
                })),
                ...lodash_1.get(options, `routes.${method}.decorators`, [])
            ], controller, method, Object.getOwnPropertyDescriptor(controller, method));
        }
    };
};
