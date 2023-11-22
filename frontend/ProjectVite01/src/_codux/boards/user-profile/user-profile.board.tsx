import { createBoard } from '@wixc3/react-board';
import { UserProfile } from '../../../components/user-profile/user-profile';

export default createBoard({
    name: 'UserProfile',
    Board: () => <UserProfile />,
    isSnippet: true,
});
