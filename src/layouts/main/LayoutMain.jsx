import { Outlet } from "react-router-dom";

import styles from './css/style.module.css';

import Menu from "../../components/menu/Menu";

export default function LayoutMain() {

    return (
        <div>
            <Menu />
            <div className={styles.page}>
                <Outlet />
            </div>
        </div>
    )
}
