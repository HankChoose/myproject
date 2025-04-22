"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestFunctionComponent = void 0;
const TestFunctionComponent = (props) => {
    const { name, age } = props;
    return (<div>
      <h1>Hello, {name}! You are {age} years old.</h1>
    </div>);
};
exports.TestFunctionComponent = TestFunctionComponent;
