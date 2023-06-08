import { useState } from 'react';
import styles from './style.module.css'
import { useLocalStorage } from '../../hook/useLocalStorage';

const About = () => {
    const [messageData, setMesssageData] = useLocalStorage('CHAT', []);
    const [inputValue, setInputValue] = useState("");

    const [user] = useLocalStorage("USER");

    const changeChat = () => {
        setMesssageData([...messageData, `${user ? user : 'Guest'}: ${inputValue}`]);
        setInputValue("")
    }
    
    return (
        <div className={styles.container}>
            <div className={styles.chat}>
                <div>CHAT</div>
                {messageData.map((el, i) => {
                    return (
                        <div key={i}>
                            {i + 1}. {el}
                        </div>
                    );
                })}
            </div>

            <div>
                <label>Write comment</label>
                <input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button onClick={() => changeChat()}>Send</button>
            <button onClick={() => setMesssageData([])}>Delete</button>
            </div>
        </div>
    );
};

export default About;