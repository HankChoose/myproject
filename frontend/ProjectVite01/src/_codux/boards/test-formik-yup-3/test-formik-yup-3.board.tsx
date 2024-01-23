import { createBoard } from '@wixc3/react-board';
import { TestFormikYup3 } from '../../../components/test-formik-yup-3/test-formik-yup-3';

export default createBoard({
    name: 'TestFormikYup3',
    Board: () => <TestFormikYup3 />,
    isSnippet: true,
});
