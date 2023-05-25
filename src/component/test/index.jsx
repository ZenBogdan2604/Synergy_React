import styles from './style.module.css';
import { useLocalStorage } from "../../hook/useCustom";
import { useState } from 'react';

function Test() {
  const [name, setName] = useState('');
  const [ setValue, getValue ] = useLocalStorage('name', '');

  function submitForm(event) {
    event.preventDefault();
  
    const formData = new FormData(event.target);
    const nameValue = formData.get('name');
    setName(nameValue);
    setValue('name', setName);
  
    fetch('https://httpbin.org/post', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(data => console.log(data))
    const savedName = getValue('name');
    console.log(savedName)
  };

    return(
      <form className={styles.reg} onSubmit={submitForm}>      
            <h2 className={styles.h}>Регистрация</h2>
  <div>
    <label for="username">Имя:</label>
    <input className={styles.wind} type="text" name="name" value={name} onInput={(e) => setName(e.target.value)} />
  </div>
  <div>
    <label for="email">Email:</label>
    <input className={styles.wind} type="email" id="email" name="email" required />
  </div>
  <div>
    <label for="password">Пароль:</label>
    <input className={styles.wind} type="password" id="password" name="password" required />
  </div>
  <button className={styles.but} type="submit">Зарегистрироваться</button>
  </form>
    );
  };
export default Test;