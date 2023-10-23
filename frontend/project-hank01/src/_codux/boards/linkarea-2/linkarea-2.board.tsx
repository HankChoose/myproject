import { createBoard } from '@wixc3/react-board';
import { Linkarea2 } from '../../../components/linkarea-2/linkarea-2';

export default createBoard({
    name: 'Linkarea2',
    Board: () => <Linkarea2 />,
    isSnippet: true,
    environmentProps: {
        canvasHeight: 387,
    },
});
