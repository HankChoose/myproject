import { createBoard } from '@wixc3/react-board';
import { TestGetImages } from '../../../components/test-get-images/test-get-images';

export default createBoard({
    name: 'TestGetImages',
    Board: () => <TestGetImages/>,
    isSnippet: true,
});
