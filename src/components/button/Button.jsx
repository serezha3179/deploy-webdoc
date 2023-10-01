import styles from "./button.module.scss"
// import { useNavigate } from "react-router-dom";

// function Button({value}) {
//     const navigate = useNavigate()
//     value = value.toLowerCase()
//      function handleOnClick(e) {console.log(value);
//         e.preventDefault()
//          if(value == "оператор") {
//             console.log(value);
//           navigate("/operator");
//          } else if(value == "координатор") {
//           navigate("/coordinator");
//          } else if(value == "администратор") {
//           navigate("/administrator");
//          } else if(value == "главный администратор") {
//           navigate("/mainadministrator");
//          }
//      }
//     return ( 
//         <button onClick={handleOnClick} className={styles.button}>Войти</button>
//      );
// }

// export default Button;


// function Button({value,...props}) {
    function Button({...props}) {
//     const navigate = useNavigate()
    // value = value.toLowerCase()
//      function handleOnClick(e) {console.log(value);
//         e.preventDefault()
//          if(value == "оператор") {
//             console.log(value);
//           navigate("/operator");
//          } else if(value == "координатор") {
//           navigate("/coordinator");
//          } else if(value == "администратор") {
//           navigate("/administrator");
//          } else if(value == "главный администратор") {
//           navigate("/mainadministrator");
//          }
//      }
    return ( 
        // <button onClick={handleOnClick} className={styles.button}>Войти</button>
        <button {...props} className={styles.button}>Войти</button>
     );
    }

    export default Button;