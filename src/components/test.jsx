import { useState } from "react";

const Test = () => {
    const [data, setData] = useState("");
    const [show, setShow] = useState(false);
return(
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <button onClick={() =>{setShow(!show);
            }}>{show ? "Скрыть": "Зарегистрироваться"}</button>
            {show && (
                <div style={{ border: '5px dashed black', width: '500px'}}>
                    <form>
                    <h2>Регистрация</h2>
                    <div>
                        <label for="username">Имя:</label>
                        <input type="text" id="username" name="username" required />
                    </div>
                    <div>
                        <label for="email">Email:</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div>
                        <label for="password">Пароль:</label>
                        <input type="password" id="password" name="password" required />
                    </div>
                    <button type="submit">Зарегистрироваться</button>
                    </form>
                    <h1>В каком городе ты живёшь?</h1>
                    <select
                    value={data}
                    onChange={(event) => setData(event.target.value)}
                    >
                    <option value="1">Казань</option>
                    <option value="2">Москва</option>  
                    <option value="3">Нижнекамск</option>  
                    <option value="4">Набережные Челны</option>  
                    </select>

                    <p>
                        {data === '4' && 'Тоже откуда и я? Клёво)'}

                        {data !== '4' && 'Пон'}
                    </p>
                </div>
            )}
    </div>
)}

export default Test;