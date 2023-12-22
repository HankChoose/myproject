import { createBoard } from '@wixc3/react-board';
import { UserApply } from '../../../components/user-apply/user-apply';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../../../reducers/rootReducer'; // 导入根 reducer
const store = createStore(rootReducer); // 创建 Redux store
import { AuthProvider } from '../../../AuthContext';

export default createBoard({
    name: 'UserApply',
    Board: () => <AuthProvider><Provider store={store}><Router><UserApply /></Router></Provider></AuthProvider>,
    isSnippet: true,
    environmentProps: {
        canvasHeight: 946,
        windowWidth: 1328,
        canvasWidth: 768,
        windowHeight: 573
    }
});
