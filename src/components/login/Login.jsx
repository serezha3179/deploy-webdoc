import { useEffect, useState } from "react";
import styles from "./login.module.scss";
import Title from "../title/Title";
import Form from "../form/Form";
import close from "../../image/close.svg";
import Input from "../form/Input";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import Cookies from "js-cookie";

function Login({modal, setModal, value}) {
    const [error, setError] = useState(false)
    const {
        register,
        // resetField,
        reset,
        formState: {
            errors,
            isValid,
        },
        handleSubmit,
    } = useForm()
    const navigate = useNavigate()

    function handleronClick() {
        setModal(true)
        reset({
            username: "",
            password: ""
        })
        setError(false)
    }

    // function handleronClickCreateAccount() {
    //     navigate("/createaccount")
    // }

    const onSubmit = async (data) => {
        console.log('aaa');
        try {
            const fieldsData = {
                login: data.username,
                password: data.password,
            };
            console.log('bbb');
            const jsonData = JSON.stringify(fieldsData);
            console.log(jsonData);
            const response = await axios.post("http://ec2-13-49-16-252.eu-north-1.compute.amazonaws.com:5000/api/auth/login/", jsonData, {
                headers: {
                    "Content-Type": "application/json",
            }   
            }); 
            console.log(response.data);
            if (response.data.accessToken && response.data.refreshToken) {
                Cookies.set("accessToken", response.data.accessToken);
                Cookies.set("refreshToken", response.data.refreshToken);
                console.log(Cookies.get('accessToken'))
                if(value === "администратор") {
                    navigate('/administrator')
                } else if(value === "главный администратор") {
                    navigate('/mainadministrator')
                }
            }


        } catch (error) {
            console.error("Произошла ошибка при входе:", error);
            setError(true)
        }
    }
 
    return ( 
        <div className={modal ? styles.wrapper : styles.wrapper_open}
        onClick={handleronClick}
        >
        <div className={styles.registration} onClick={(e) => {e.stopPropagation()}}>
            <img src={close} alt="close" className={styles.cross}
             onClick={handleronClick}
            />
                    <div className={styles.itemleft}>
                        <div className={styles.title}>
                        <Title>Пожалуйста, введите свои данные для входа в систему</Title>
                        </div>
                        {/* <p className={styles.paragraph} onClick={handleronClickCreateAccount}>Нет учётной записи?</p> */}
                    </div>
                    <div className={styles.itemright}>
                        <Form onsubmit={handleSubmit(onSubmit)}>
                        <Input 
                          htmlFor="top" 
                          id="username" 
                          type="text" 
                          text="Имя пользователя" 
                          alt="cross" 
                          register={register} 
                          textbottom="Введите имя пользователя"
                          errors={errors}
                          error={error}
                          name="username"
                          />
                         <Input 
                          htmlFor="bottom" 
                          id="password" 
                          type="password" 
                          text="Пароль" 
                          register={register}
                          textbottom="Введите пароль"
                          errors={errors}
                          error={error}
                          name="password"
                          />
                        <input type="submit" value="Войти" className={styles.input}
                         disabled={!isValid}
                         /> 
                        </Form>
                    </div>
                  </div>
                </div>
     );
}

export default Login;