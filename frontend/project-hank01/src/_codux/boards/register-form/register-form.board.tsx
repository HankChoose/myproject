import { createBoard } from '@wixc3/react-board';
import { RegisterForm } from '../../../components/register-form/register-form';

export default createBoard({
    name: 'RegisterForm',
    Board: () => <RegisterForm />,
    isSnippet: true,
});
