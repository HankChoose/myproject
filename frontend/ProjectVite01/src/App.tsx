import { useState } from 'react';
import classNames from 'classnames';

import styles from './App.module.scss';

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className={styles.App}>
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    
                </a>
                <a href="https://reactjs.org" target="_blank">
                    
                </a>
                <a href="https://www.typescriptlang.org/" target="_blank">
                   
                </a>
                <a href="https://sass-lang.com/" target="_blank">
                    
                </a>
            </div>
            <div className={styles.card}>
                <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className={styles['read-the-docs']}>
                Click on the Vite and React logos to learn more
            </p>
        </div>
    );
}

export default App;
