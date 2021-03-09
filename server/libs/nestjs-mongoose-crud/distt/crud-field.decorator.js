"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("./constants");
exports.CrudField = (field) => {
    return (target, property) => {
        Reflect.defineMetadata(constants_1.CRUD_FIELD_METADATA, field, target, property);
    };
};
