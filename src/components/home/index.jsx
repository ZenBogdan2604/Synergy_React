import { useState } from 'react';
import styles from './style.module.css'
import { useLocalStorage } from '../../hook/useLocalStorage';

const Home = () => {
const [user, setUser] = useLocalStorage("USER");
const [inputValue, setInputValue] = useState("");

    return (
        <div className={styles.container}>
            {user && (
                <div>
                <div>Greetings {user}</div>
                <button onClick={() => setUser("")}>Exit</button>
                </div>
            )}

            {!user && (
                <div>
                    <label>Enter your name</label>
                    <input 
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    />
                    <button onClick={() => setUser(inputValue)}>Save</button>
                </div>
            )}
        </div>
    );
};

export default Home;