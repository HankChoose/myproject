"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const app_st_css_1 = require("./app.st.css");
const header_1 = require("./header");
const App = ({ className }) => {
    return (<main className={(0, app_st_css_1.st)(app_st_css_1.classes.root, className)}>
            <header_1.Header className={app_st_css_1.classes.header}/>
        </main>);
};
exports.App = App;
