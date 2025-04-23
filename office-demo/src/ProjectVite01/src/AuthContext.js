"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAuth = exports.AuthProvider = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const AuthContext = (0, react_1.createContext)(undefined);
const AuthProvider = ({ children }) => {
    const [isLoggedIn, setLoggedIn] = (0, react_1.useState)(false);
    const signIn = () => {
        setLoggedIn(true);
    };
    const signOut = () => {
        setLoggedIn(false);
    };
    return ((0, jsx_runtime_1.jsx)(AuthContext.Provider, { value: { isLoggedIn, signIn, signOut }, children: children }));
};
exports.AuthProvider = AuthProvider;
const useAuth = () => {
    const authContext = (0, react_1.useContext)(AuthContext);
    if (!authContext) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return authContext;
};
exports.useAuth = useAuth;
