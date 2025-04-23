"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateEmail = exports.updateName = void 0;
const updateName = (name) => ({
    type: "UPDATE_NAME",
    payload: name
});
exports.updateName = updateName;
const updateEmail = (email) => ({
    type: "UPDATE_EMAIL",
    payload: email
});
exports.updateEmail = updateEmail;
