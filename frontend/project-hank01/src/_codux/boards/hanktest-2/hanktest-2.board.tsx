import { createBoard } from '@wixc3/react-board';
import { Hanktest2 } from '../../../components/hanktest-2/hanktest-2';

export default createBoard({
    name: 'Hanktest2',
    Board: () => <Hanktest2 />,
    isSnippet: true,
});
