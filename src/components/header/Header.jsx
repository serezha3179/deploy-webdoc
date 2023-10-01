import { NavLink } from "react-router-dom";
import styles from "./header.module.scss";

function Header() {
    return ( 
        <header className={styles.header}>
            <div className="container">
                <div className={styles.wrapper}>
                <NavLink to="/" className={styles.logo}>%Logo%</NavLink>
                    <div className={styles.help}>Help</div>
                </div>
            </div>
        </header>
     );
}

export default Header;