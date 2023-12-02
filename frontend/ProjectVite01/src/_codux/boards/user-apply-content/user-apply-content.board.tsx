import { createBoard } from '@wixc3/react-board';
import { UserApplyContent } from '../../../components/user-apply-content/user-apply-content';

export default createBoard({
    name: 'UserApplyContent',
    Board: () => <UserApplyContent />,
    isSnippet: true,
});
