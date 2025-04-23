"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_board_1 = require("@wixc3/react-board");
const test_data_table_1 = require("../../../components/test-data-table/test-data-table");
const sampleData = [
    {
        id: '1',
        apply_type: 'apply_type 1',
        requirements: 'Description 1Description 1Description 1Description 1Description 1Description 1',
        username: 'hank1',
        email: 'hank1@example.com',
        image_path_main: 'apply_type 1',
        apply_time: new Date('2024-01-09'), // Convert the date string to Date object
        comment: 'apply_type 1',
        comment2: 'apply_type 1'
    },
    {
        id: '2',
        apply_type: 'apply_type 2',
        requirements: 'Description 1Description 1Description 1Description 1Description 1Description 1',
        username: 'hank2',
        email: 'hank1@example.com',
        image_path_main: 'apply_type 1',
        apply_time: new Date('2024-01-09'), // Convert the date string to Date object
        comment: 'apply_type 1',
        comment2: 'apply_type 1'
    },
    // ... other data objects
];
exports.default = (0, react_board_1.createBoard)({
    name: 'TestDataTable',
    Board: () => (0, jsx_runtime_1.jsx)(test_data_table_1.TestDataTable, { data: sampleData }),
    isSnippet: true,
    environmentProps: {
        windowHeight: 629,
        windowWidth: 1032,
        canvasHeight: 552
    }
});
