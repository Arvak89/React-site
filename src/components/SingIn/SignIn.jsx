import styles from "./SignIn.module.css";
import {SERVER_URL} from "../../../public/consts.jsx";
import axios from "axios";
import {useForm} from "react-hook-form"
import {useState} from "react";

function SignIn({active, setActive}) {
    const [data, setData] = useState({
        email: "",
        password: "",
    });

    const {
        register,
        handleSubmit,
        setValue,
        formState: {errors}
    } = useForm()

    const SingIn = () => {// функция дления нового мероприятия в базу данных
        console.log("SADadasda")
        setValue("email", "")
        setValue("password", "")
        setActive(false);
        axios({url: `${SERVER_URL}/SingIn`, method: 'GET', body: {...data}})
            .then(response => response.json())
            .then(data => {
                if (data.message !== 0) {
                    alert("Всё круто");
                } else {
                    alert("Произошли не предвиденные шоколадки");
                }
            });
    }

    const edit = (prop, event) => {
        setData({...data, ...{[prop]: event.target.value}});
        console.log(data);
    }

    return (
        <div>
            <div className={active ? styles.modal + ` ` + styles.active : styles.modal}
                 onClick={() => (setActive(false))}>
                <div className={active ? styles.modalContent + ` ` + styles.active : styles.modalContent}
                     onClick={e => e.stopPropagation()}>
                    <h1 className={styles.signInTitle}>Войти</h1>
                    <form onSubmit={handleSubmit(() => SingIn())}>
                        <div className={styles.inputs}>
                            <span>Почта</span>
                            <input {...register("email", {required: true})}
                                   value={data.email}
                                   placeholder={"Email"}
                                   type={"email"}
                                   onChange={event => edit('email', event)}/>
                            <span>Пароль</span>
                            <input {...register("password", {required: true})}
                                   value={data.password} placeholder={"Password"} type={"password"}
                                   onChange={event => edit('password', event)}/>
                        </div>
                        <button className={styles.addButton} onClick={SingIn}>Создать</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SignIn;