import { createBoard } from '@wixc3/react-board';
import TestListComponent  from '../../../components/test-list-component/test-list-component';

export default createBoard({
    name: 'TestListComponent',
    Board: () => <TestListComponent />,
    isSnippet: true,
});
