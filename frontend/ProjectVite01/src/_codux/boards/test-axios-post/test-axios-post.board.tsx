import { createBoard } from '@wixc3/react-board';
import { TestAxiosPost } from '../../../components/test-axios-post/test-axios-post';

export default createBoard({
    name: 'TestAxiosPost',
    Board: () => <TestAxiosPost />,
    isSnippet: true,
});
