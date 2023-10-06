import { createBoard } from '@wixc3/react-board';
import { Link } from '../../../components/link/link';

export default createBoard({
    name: 'Link',
    Board: () => <Link />,
    isSnippet: true,
});
