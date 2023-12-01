import { createBoard } from '@wixc3/react-board';
import { TestList } from '../../../components/test-list/test-list';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

export default createBoard({
    name: 'TestList',
    Board: () =><Router>  <TestList /></Router> ,
    isSnippet: true,
});
