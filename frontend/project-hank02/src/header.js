"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Header = void 0;
const header_st_css_1 = require("./header.st.css");
const stylable_svg_1 = __importDefault(require("./assets/stylable.svg"));
const Header = ({ className }) => {
    return (<header className={(0, header_st_css_1.st)(header_st_css_1.classes.root, className)}>
            <h1 className={header_st_css_1.classes.title}>
                Hello{' '}
                <a className={header_st_css_1.classes.anchor} href="https://stylable.io" target="_blank" rel="noopener noreferrer">
                    Stylable!
                </a>{' '}
                <img className={header_st_css_1.classes.icon} src={stylable_svg_1.default} width={50} height={50} alt=""/>
            </h1>
        </header>);
};
exports.Header = Header;
