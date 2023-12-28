import styles from './css/style.module.css';

import { NavLink } from 'react-router-dom'; 

export default function Menu() {

    const active = ({isActive}) => (isActive ? (
        `${styles['menu__item-active']} ${styles.menu__item}`
        ) : (
            styles.menu__item
            ));

    return (
        <nav className={styles.menu}>
            <NavLink className={active} to="/">Главная</NavLink>
            <NavLink className={active} to="/drift">Дрифт-такси</NavLink>
            <NavLink className={active} to="/timeattack">Time Attack</NavLink>
            <NavLink className={active} to="/forza">Forza Karting</NavLink>
        </nav>
    )
}
