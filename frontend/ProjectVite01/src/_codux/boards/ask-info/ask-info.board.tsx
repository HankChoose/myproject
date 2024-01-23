import { createBoard } from '@wixc3/react-board';
import { AskInfo } from '../../../components/ask-info/ask-info';
import { AuthProvider } from '../../../AuthContext';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

export default createBoard({
    name: 'AskInfo',
    Board: () => <AuthProvider><Router> <AskInfo /></Router></AuthProvider>,
    isSnippet: true,
});
