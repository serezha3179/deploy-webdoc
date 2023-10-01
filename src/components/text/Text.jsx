import styles from "./text.module.scss";

function Text({children}) {
    return ( 
        <p className={styles.text}>{children}</p>
     );
}

export default Text;