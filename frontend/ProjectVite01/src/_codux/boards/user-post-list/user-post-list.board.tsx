import { createBoard } from '@wixc3/react-board';
import { UserPostList } from '../../../components/user-post-list/user-post-list';

export default createBoard({
    name: 'UserPostList',
    Board: () => <UserPostList />,
    isSnippet: true,
});
