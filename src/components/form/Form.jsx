// import Button from "../button/Button";
// import Input from "./Input";
import styles from "./form.module.scss";
// import { Form } from "react-router-dom";
// import cross from "./icon-cross.svg";
// import attention from "./icon-attention";

function Form({children,onsubmit}) {

    return ( 
        <form action="" className={styles.form} onSubmit={onsubmit}>
           {children}
        </form>
     );
}

export default Form;