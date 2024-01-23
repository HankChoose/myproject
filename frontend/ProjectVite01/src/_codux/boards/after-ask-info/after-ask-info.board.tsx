import { createBoard } from '@wixc3/react-board';
import { AfterAskInfo } from '../../../components/after-ask-info/after-ask-info';

export default createBoard({
    name: 'AfterAskInfo',
    Board: () => <AfterAskInfo />,
    isSnippet: true,
});
