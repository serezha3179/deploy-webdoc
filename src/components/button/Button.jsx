import styles from "./button.module.css"
import { useNavigate } from "react-router-dom";

function Button({value}) {
    const navigate = useNavigate()

    function handleOnClick() {
       if(value == "Оператор") {
        navigate("/operator");
       } else if(value == "Координатор") {
        navigate("/coordinator");
       } else if(value == "Администратор") {
        navigate("/administrator");
       } else if(value == "Главный администратор") {
        navigate("/mainadministrator");
       }
}
    return ( 
        <button onClick={handleOnClick} className={styles.button}>Войти</button>
     );
}

export default Button;