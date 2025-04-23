"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTopbar = exports.TopbarProvider = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
// TopbarContext.js
const react_1 = require("react");
const defaultValue = {
    topbarContent: {
        icon: 'default-icon',
        link: '/',
        text: 'Default Topbar Content',
    },
    updateTopbarContent: () => { },
};
const TopbarContext = (0, react_1.createContext)(defaultValue);
const TopbarProvider = ({ className, children }) => {
    const [topbarContent, setTopbarContent] = (0, react_1.useState)({
        icon: 'default-icon',
        link: '/',
        text: 'Default Topbar Content',
    });
    const updateTopbarContent = (newContent) => {
        setTopbarContent(newContent);
    };
    return ((0, jsx_runtime_1.jsx)(TopbarContext.Provider, { value: { topbarContent, updateTopbarContent }, children: children }));
};
exports.TopbarProvider = TopbarProvider;
const useTopbar = () => {
    const context = (0, react_1.useContext)(TopbarContext);
    if (!context) {
        throw new Error('useTopbar must be used within a TopbarProvider');
    }
    return context;
};
exports.useTopbar = useTopbar;
