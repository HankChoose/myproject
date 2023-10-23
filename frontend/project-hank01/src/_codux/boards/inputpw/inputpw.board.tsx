import { createBoard } from '@wixc3/react-board';
import { Inputpw } from '../../../components/inputpw/inputpw';

export default createBoard({
    name: 'Inputpw',
    Board: () => <Inputpw />,
    isSnippet: true,
    environmentProps: {
        canvasHeight: 66,
        windowWidth: 1024,
        windowHeight: 489,
    },
});
