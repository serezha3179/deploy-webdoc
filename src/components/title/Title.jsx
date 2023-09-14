// import { Children } from "react";
import styles from "./title.module.css";

function Title({children,...props}) {
    return ( 
        <h1 className={props.className == "title" ? styles.title : styles.subtitle}>{children}</h1>
     );
}

export default Title;