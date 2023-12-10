import { createBoard } from '@wixc3/react-board';
import { UserApply4 } from '../../../components/user-apply-4/user-apply-4';

export default createBoard({
    name: 'UserApply4',
    Board: () => <UserApply4 />,
    isSnippet: true,
});
