import { createBoard } from '@wixc3/react-board';
import { ContactUs } from '../../../components/contact-us/contact-us';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';

export default createBoard({
    name: 'ContactUs',
    Board: () => <Router><ContactUs /></Router>,
    isSnippet: true,
});
