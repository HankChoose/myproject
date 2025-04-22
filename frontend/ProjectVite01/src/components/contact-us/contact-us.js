"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactUs = void 0;
const classnames_1 = __importDefault(require("classnames"));
const contact_us_module_scss_1 = __importDefault(require("./contact-us.module.scss"));
require("bootstrap/dist/css/bootstrap.min.css");
const react_bootstrap_1 = require("react-bootstrap");
const react_router_dom_1 = require("react-router-dom");
const ri_1 = require("react-icons/ri");
/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
const ContactUs = ({ className }) => {
    return <div className={(0, classnames_1.default)(contact_us_module_scss_1.default.root, className)}>
        <react_bootstrap_1.Card style={{ width: '60vw' }}>
            <react_bootstrap_1.Card.Body>
                <react_bootstrap_1.Card.Title>
                    <h1>Contact Us</h1>
                </react_bootstrap_1.Card.Title>
                <react_bootstrap_1.Card.Text></react_bootstrap_1.Card.Text>
            </react_bootstrap_1.Card.Body>
            <react_bootstrap_1.ListGroup className="list-group-flush">
                <react_bootstrap_1.ListGroup.Item>
                    Please feel free to contact us if need further information.  <react_router_dom_1.Link to="/react/askinfo"><ri_1.RiMailSendLine />Send message</react_router_dom_1.Link>  to us.
                </react_bootstrap_1.ListGroup.Item>

                <react_bootstrap_1.ListGroup.Item>
                    <react_bootstrap_1.Table striped hover>
                        <thead>
                            <tr>
                                <th style={{ width: '150px' }}>Itme</th>
                                <th>Content</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Email:</td>
                                <td>zhiyouyuec.@gmail.om</td>
                            </tr>
                            <tr>
                                <td>Email:</td>
                                <td>hankchenv@gmail.om</td>
                            </tr>
                            <tr>
                                <td>Phone:</td>
                                <td>+1 587-936-1806</td>
                            </tr>
                            
                        </tbody>
                    </react_bootstrap_1.Table>
                </react_bootstrap_1.ListGroup.Item>
            </react_bootstrap_1.ListGroup>
            <react_bootstrap_1.Card.Body>
                <react_bootstrap_1.Card.Link href="#"></react_bootstrap_1.Card.Link>
            </react_bootstrap_1.Card.Body>
        </react_bootstrap_1.Card>
    </div>;
};
exports.ContactUs = ContactUs;
