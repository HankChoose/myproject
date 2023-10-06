import { createBoard } from '@wixc3/react-board';
import App from '../../../App';

export default createBoard({
    name: 'App1',
    Board: () => <App />,
    environmentProps: {
        canvasWidth: 385,
        canvasHeight: 357,
    },
});
