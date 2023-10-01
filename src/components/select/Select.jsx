/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";
import styles from "./select.module.scss"


function Select({setvalue}) {
    
    const [open,setOpen] = useState(false);
    const [text, setText] = useState('')
    const [placeholder, setPlaceholder] = useState('Выбрать')

    const inputRef = useRef(null)
    const wrapref = useRef(null)


    useEffect(() => {
        const onKeypress = e => console.log(e);
      
        document.addEventListener('keypress', onKeypress);
      
        return () => {
          document.removeEventListener('keypress', onKeypress);
        };
      }, []);


    useEffect(()=>{
        function openSelect(e) {
        if(wrapref.current.contains(e.target) && open == false) {
            setOpen(true)
            setPlaceholder('')
        } else if(wrapref.current.contains(e.target) && open == true) {
            setOpen(false)
            setPlaceholder('Выбрать')
            setText(e.target.textContent)
            setvalue(e.target.textContent)
        } else if(!wrapref.current.contains(e.target)) {
            setOpen(false)
            setPlaceholder('Выбрать')
        }
        } 



        document.addEventListener('click', openSelect)
        return () => {
            document.removeEventListener('click', openSelect)
        }
    },[open])

    function change(e) {
        setText(e.target.value)
        setvalue(e.target.value)
    }

    return ( 
        <div ref={wrapref} className={styles.select__wrapper} tabIndex={0}>
        {/* <div className={styles.select} type="text">{text}</div> */}
        <input ref={inputRef} className={styles.select} type="text" value={text} placeholder={placeholder} onChange={change}/>
        <div className={open == false ? styles.option__wrapper : styles.option__wrapper_open}>
        <p id="operator" className={open == false ? styles.option : styles.option_open}>Оператор</p>
        <p id="coordinator" className={open == false ? styles.option : styles.option_open}>Координатор</p>
        <p id="administrator" className={open == false ? styles.option : styles.option_open}>Администратор</p>
        <p id="mainadministrator" className={open == false ? styles.option : styles.option_open}>Главный администратор</p>
        </div>
        </div>
     );

}

export default Select;