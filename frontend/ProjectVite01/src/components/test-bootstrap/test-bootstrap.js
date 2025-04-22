"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestBootstrap = void 0;
const classnames_1 = __importDefault(require("classnames"));
const test_bootstrap_module_scss_1 = __importDefault(require("./test-bootstrap.module.scss"));
require("bootstrap/dist/css/bootstrap.min.css");
const Table_1 = __importDefault(require("react-bootstrap/Table"));
const Button_1 = __importDefault(require("react-bootstrap/Button"));
/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
const TestBootstrap = ({ className }) => {
    return <div className={(0, classnames_1.default)(test_bootstrap_module_scss_1.default.root, className)}>
    <Table_1.default striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table_1.default>
    <Button_1.default variant="primary">Primary</Button_1.default>{' '}
    <Button_1.default variant="secondary">Secondary</Button_1.default>{' '}
    <Button_1.default variant="success">Success</Button_1.default>{' '}
    <Button_1.default variant="warning">Warning</Button_1.default>{' '}
    <Button_1.default variant="danger">Danger</Button_1.default>{' '}
    <Button_1.default variant="info">Info</Button_1.default>{' '}
    <Button_1.default variant="light">Light</Button_1.default>{' '}
    <Button_1.default variant="dark">Dark</Button_1.default>
    <Button_1.default variant="link">Link</Button_1.default>
    
    </div>;
};
exports.TestBootstrap = TestBootstrap;
