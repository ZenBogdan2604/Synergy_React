import { Link } from "react-router-dom";
import styles from './style.module.css'

const Header = () => {
    return ( 
    <div className={styles.container}>
        <ul className={styles.list}>
            <li><img src="../logo.png"></img></li>
            <li><Link className={styles.decor} to='/home'>Домашняя страница</Link></li>
            <li><Link className={styles.decor} to='/test'>Тестовая страница</Link></li>
            <li><Link className={styles.decor} to='/about-me'>Чат</Link></li>
            <li><Link className={styles.decor} to='/heaven'>Любимая еда</Link></li>
            <li><Link className={styles.decor} to='/time'>Время</Link></li>
        </ul>
    </div>
    );
};

export default Header;