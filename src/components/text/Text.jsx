import styles from "./text.module.css";

function Text({children}) {
    return ( 
        <p className={styles.text}>{children}</p>
     );
}

export default Text;