"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const initialState = {
    name: "",
    email: "",
};
const userInfoReducer = (state = initialState, action) => {
    switch (action.type) {
        case "UPDATE_NAME":
            return Object.assign(Object.assign({}, state), { name: action.payload });
        case "UPDATE_EMAIL":
            return Object.assign(Object.assign({}, state), { email: action.payload });
        default:
            return state;
    }
};
exports.default = userInfoReducer;
