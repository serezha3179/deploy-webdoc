import styles from "./input.module.scss";
import iconCross from "./icon-cross.svg";
import iconAttention from "./icon-attention.svg"
// import {  useState } from "react";

function Input({htmlFor,id,type,text,alt,register,textbottom,errors,name,error}) {
    // const [error,setError] = useState()
    return ( 
        <>
        <label htmlFor={htmlFor} className={error ? styles.label_error : styles.label}>
            <input 
            type={type} 
            id={id} 
            className={styles.input} 
            {...register(name, {
                required: true,
            })}
            name={name}
            
            />
            <img className={styles.img} src={error ? iconAttention : iconCross} alt={alt} />
            <span className={styles.span}>{text}</span>
        </label>
            {/* <div className={styles.texterror}>{errors[name] || !error ? "Пользователь не найден или введён неправильный пароль" : textbottom}</div> */}
            <div className={styles.texterror}>{ error ? "Пользователь не найден или введён неправильный пароль" : textbottom}</div>
            </>
            
     );
}

export default Input;