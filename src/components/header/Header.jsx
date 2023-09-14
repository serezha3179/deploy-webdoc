import { NavLink } from "react-router-dom";
import styles from "./header.module.css";

function Header() {
    return ( 
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.header__wrapper}>
                <NavLink to="/" className={styles.header__logo}> Logo</NavLink>
                    <div className="header__help">Help</div>
                </div>
            </div>
        </header>
     );
}

export default Header;