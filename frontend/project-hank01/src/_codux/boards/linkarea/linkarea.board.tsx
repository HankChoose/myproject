import { createBoard } from '@wixc3/react-board';
import { Linkarea } from '../../../components/linkarea/linkarea';

export default createBoard({
    name: 'Linkarea',
    Board: () => <Linkarea />,
    isSnippet: true,
    environmentProps: {
        windowHeight: 532,
    },
    
});
