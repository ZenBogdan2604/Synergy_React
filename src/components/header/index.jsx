import { Link } from "react-router-dom";
import styles from './style.module.css'
import { useEffect, useState } from "react";

const Header = () => {
    const [count,setCount] =useState(0);

    useEffect(() => {
        setTimeout(() => {
            setCount(count + 1);
        }, 1000);
    }, [count]);
    return ( 
    <div className={styles.container}>
        <ul className={styles.list}>
            <li><Link to='/home'>Домашняя страница</Link></li>
            <li><Link to='/work'>Работы</Link></li>
            <li><Link to='/test'>Тестовая страница</Link></li>
            <li><Link to='/about-me'>Обо мне</Link></li>
            <li><Link to='/heaven'>Как достичь рая</Link></li>
            <li><Link to='/time'>Время</Link></li>
        </ul>
        <h1>{count}</h1>
    </div>
    );
};

export default Header;