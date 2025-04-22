"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestLink = void 0;
const classnames_1 = __importDefault(require("classnames"));
const test_link_module_scss_1 = __importDefault(require("./test-link.module.scss"));
const react_router_dom_1 = require("react-router-dom");
/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
const TestLink = ({ className }) => {
    return <div className={(0, classnames_1.default)(test_link_module_scss_1.default.root, className)}>
      <div>
        <react_router_dom_1.Link to="/react/signin"> signin </react_router_dom_1.Link>
      </div>
      <div>
        <react_router_dom_1.Link to="/react/userapply"> userapply </react_router_dom_1.Link>
        <react_router_dom_1.Link to="/react/userprofile"> userprofile </react_router_dom_1.Link>
      </div>
      <div>
        <react_router_dom_1.Link to="/react/checkemail"> checkemail </react_router_dom_1.Link>
        <react_router_dom_1.Link to="/react/checkemail2"> checkemail2 </react_router_dom_1.Link>
      </div>
      <div>
        <react_router_dom_1.Link to="/react/testaxiospost"> testaxiospost </react_router_dom_1.Link>
        <react_router_dom_1.Link to="/react/testaxiospost2"> testaxiospost2 </react_router_dom_1.Link>
        <react_router_dom_1.Link to="/react/testaxiospost3">testaxiospost3 </react_router_dom_1.Link>
      </div>
      <div>
        <react_router_dom_1.Link to="/react/testtoken"> testtoken </react_router_dom_1.Link>
        <react_router_dom_1.Link to="/react/testlist"> testlist </react_router_dom_1.Link>
        <react_router_dom_1.Link to="/react/testnavigate"> testnavigate </react_router_dom_1.Link>
        <react_router_dom_1.Link to="/react/testchangepw"> testchangepw </react_router_dom_1.Link>
        <react_router_dom_1.Link to="/react/testrequest"> testrequest </react_router_dom_1.Link>
      </div>
      <div>
        <react_router_dom_1.Link to="/react/testupload"> testupload </react_router_dom_1.Link>
        <react_router_dom_1.Link to="/react/testgetimages"> testgetimages </react_router_dom_1.Link>
        <react_router_dom_1.Link to="/react/testgetimages2"> testgetimages2 </react_router_dom_1.Link>
        <react_router_dom_1.Link to="/react/testgetimagesarrays"> testgetimagesarrays </react_router_dom_1.Link>
       
      </div>
    </div>;
};
exports.TestLink = TestLink;
