// import styles from "./createaccoutn.module.scss";

import { useEffect, useState } from "react";
import styles from "./createaccoutn.module.scss";
import Title from "../title/Title";
import Form from "../form/Form";
import close from "../../image/close.svg";
import Input from "../form/Input";
// import Button from "../button/Button";
import { useNavigate } from "react-router-dom";
import cross from "../form/icon-cross.svg"
import { useForm } from "react-hook-form";

function CreateAccount() {
    const [modal, setModal] = useState(true)

    const {
        register,
        formState: {
            errors,
            isValid,
        },
        handleSubmit,
        reset,
    } = useForm()
    // const cross = useRef()
    const navigate = useNavigate()

    function handleronClick() {
        navigate("/")
    }
    // function handleronClickCreateAccount() {
    //     navigate("/createaccount")
    // }

    // function handleronClickSubmit(e) {
    //     e.preventDefault()
    //     console.log('dfdfdf');
    // }
    const onSubmit = (data) => {
        console.log(JSON.stringify(data));
        reset()
        navigate("/login")
    }
    useEffect(()=>{
        setModal(true)
    },[modal])

    return ( 
        // <main className="main">
        // <div className={modal == true ? styles.registration_open : styles.registration}>
        <div className={styles.wrapper}>
        <div className={styles.registration}>
            <img src={close} alt="close" className={styles.cross} onClick={handleronClick}/>
            {/* <div className={styles.content}> */}
                {/* <div className={styles.wrapper}> */}
                    <div className={styles.itemleft}>
                        {/* <h2 className={styles.title}>Пожалуйста, введите свои данные для входа в систему</h2> */}
                        <div className={styles.title}>
                        <Title>Введите данные для создания учётной записи</Title>
                        </div>
                        {/* <p className={styles.paragraph} onClick={handleronClickCreateAccount}>Нет учётной записи?</p> */}
                    </div>
                    <div className={styles.itemright}>
                        <Form onsubmit={handleSubmit(onSubmit)}>
                        {/* <Form onsubmit={handleronClickSubmit}> */}
                        <Input 
                          htmlFor="top" 
                          id="top" 
                          type="text" 
                          text="Имя пользователя" 
                          img={cross} 
                          alt="cross" 
                          register={register} 
                          textbottom="Введите имя пользователя"
                          errors={errors}
                          name="name"
                          />
                         <Input 
                          htmlFor="middle" 
                          id="middle" 
                          type="password" 
                          text="Пароль" 
                          register={register}
                          textbottom="Введите пароль"
                          errors={errors}
                          name="password"
                          />
                          <Input 
                          htmlFor="bottom" 
                          id="bottom" 
                          type="password" 
                          text="Подтверждение пароля" 
                          register={register}
                          textbottom="Подтвердите пароль"
                          errors={errors}
                          name="сonfirm password"
                          />
                        {/* <Button onClick={handleronClickSubmit}>Войти</Button> */}
                        <input type="submit" value="Зарегистрироваться" className={styles.input} disabled={!isValid}/> 
                        </Form>
                    </div>
                {/* </div> */}
            {/* </div> */}
        </div>
        </div>
        // </main>
     );
}

export default CreateAccount;