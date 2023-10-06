import { useState } from 'react';
import styles from './App.module.scss';
import { Input } from './components/input/input';
import { Button } from './components/button/button';
import Input_module from './components/input/input.module.scss';
import { Link } from './components/link/link';

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className={styles.App}>
            <form>
                <label>Name</label>
                <Input className={Input_module.input} />
                <label>Email</label>
                <Input />
                <label>Password</label>
                <input type="password" />
                <Button />
                <Link />
            </form>
        </div>
    );
}

export default App;
