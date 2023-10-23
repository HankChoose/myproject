import { createBoard } from '@wixc3/react-board';
import App from '../../../App';

export default createBoard({
    name: 'App',
    Board: () => <App />,
    environmentProps: {
        canvasBackgroundColor: 'rgba(255, 196, 196, 0)',
        canvasHeight: 608,
        windowHeight: 524,
        windowWidth: 1148,
    },
});
