import { createBoard } from '@wixc3/react-board';
import { TestDataTable } from '../../../components/test-data-table/test-data-table';
const sampleData = [
    { id: '1', apply_type: 'apply_type 1', apply_description: 'Description 1Description 1Description 1Description 1Description 1Description 1', username: 'hank1', email: 'hank1@example.com' },
    { id: '2', apply_type: 'apply_type 2', apply_description: 'Description 2Description 2Description 2Description 2Description 2Description 2Description 2', username: 'Ray2', email: 'ray2@example.com' },
    { id: '3', apply_type: 'apply_type 3', apply_description: 'Description 3', username: 'hank1', email: 'hank1@example.com' },
    { id: '4', apply_type: 'apply_type 4', apply_description: 'Description 4', username: 'Ray2', email: 'ray2@example.com' },
    { id: '5', apply_type: 'apply_type 5', apply_description: 'Description 5', username: 'hank1', email: 'hank1@example.com' },
    { id: '6', apply_type: 'apply_type 6', apply_description: 'Description 6Description 6Description 6Description 6Description 6', username: 'Ray2', email: 'ray2@example.com' },
];
export default createBoard({
    name: 'TestDataTable',
    Board: () => <TestDataTable data={sampleData} />,
    isSnippet: true,
});
