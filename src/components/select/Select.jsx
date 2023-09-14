import { useEffect, useState } from "react";
import styles from "./select.module.css"


function Select({setvalue}) {
    
    const [open,setOpen] = useState(false);
    const [text, setText] = useState('Выбрать')

    useEffect(() => {
       setvalue(text)
    })

    function openSelect(e) {
        setOpen((currentValue) => {
            if(currentValue === false) {
                setOpen(true)
            } else {
                setOpen(false)
                setText(e.target.textContent)
            }
        })
    }

    return ( 
        <div onClick={openSelect} className={styles.select__wrapper}>
        <div className={styles.select}>{text}</div>
        <div className={open == false ? styles.option__wrapper : styles.option__wrapper_open}>
        <p className={open == false ? styles.option : styles.option_open}>Оператор</p>
        <p className={open == false ? styles.option : styles.option_open}>Координатор</p>
        <p className={open == false ? styles.option : styles.option_open}>Администратор</p>
        <p className={open == false ? styles.option : styles.option_open}>Главный администратор</p>
        </div>
        </div>
     );

}

export default Select;