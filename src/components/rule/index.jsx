import { useState } from 'react';
import styles from './style.module.css'
import { useLocalStorage } from '../../hook/useLocalStorage';

const Rule = () => {
    const [user, setUser] = useLocalStorage("USER");
    const [name, setName] = useState('');
    const [food, setFood] = useLocalStorage("FOOD")

    return (
        <form className={styles.container}>
            {food && (
                <div>
                <div>Now i know it</div>
                <button onClick={() => setFood("")}>Exit</button>
                </div>
            )}

            {!food && (
                <div>
                    <label>What is your favorite food {user}?</label>
                    <input 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    />
                    <button onClick={() => setFood(name)}>Save</button>
                </div>
            )}
        </form>
    );
};

export default Rule;