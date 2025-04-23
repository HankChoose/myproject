"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useUrl = exports.UrlProvider = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const UrlContext = (0, react_1.createContext)(undefined);
const UrlProvider = () => {
    const [url, setUrl] = (0, react_1.useState)('https://zhiyouyuec.com');
    const updateUrl = (newUrl) => {
        setUrl(newUrl);
    };
    const contextValue = {
        url,
        updateUrl,
    };
    return (
    /*<UrlContext.Provider value={{ url, updateUrl }}>*/
    (0, jsx_runtime_1.jsx)(UrlContext.Provider, { value: contextValue, children: (0, jsx_runtime_1.jsxs)("h3", { children: ["url: ", url] }) }));
};
exports.UrlProvider = UrlProvider;
const useUrl = () => {
    const context = (0, react_1.useContext)(UrlContext);
    if (!context) {
        throw new Error('useUrl must be used within a UrlProvider');
    }
    return context;
};
exports.useUrl = useUrl;
