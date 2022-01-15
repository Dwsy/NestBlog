"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrudField = void 0;
const constants_1 = require("./constants");
const CrudField = (field) => {
    return (target, property) => {
        Reflect.defineMetadata(constants_1.CRUD_FIELD_METADATA, field, target, property);
    };
};
exports.CrudField = CrudField;
