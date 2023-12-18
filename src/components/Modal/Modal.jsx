import styles from "./Modal.module.css";
import {SERVER_URL} from "../../../public/consts.jsx";
import axios from "axios";
import {useState} from "react";

function Modal({active, setActive, }) {
    const [data, setData] = useState({
        name: "",
        date: "",
        time: "",
        adress: "",
        description: "",
    });

    const addEvent = () => {// функция добавления нового мероприятия в базу данных
        setActive(false);
        axios({url: `${SERVER_URL}/addEvent`, method: 'GET', body: {...data}})
            .then(response => response.json())
            .then(data => {
                if (data.message !== 0) {
                    alert("Всё круто");
                } else {
                    alert("Произошли не предвиденные шоколадки");
                }
            });
        setData({
            name: "",
            date: "",
            time: "",
            adress: "",
            description: "",
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
                    <h1 className={styles.modalName}>СОЗДАТЬ СОБЫТИЕ</h1>
                    <div className={styles.inputs}>
                        <span className={styles.firstSpan}>Название</span>
                        <input value={data.name} placeholder={"Название"} className={styles.firstInput}
                               onChange={event => edit('name', event)}/>
                        <span>Дата начала</span>
                        <input value={data.date} type={"date"} onChange={event => edit('date', event)}/>
                        <span>Время начала</span>
                        <input value={data.time} type={"time"} onChange={event => edit('time', event)}/>
                        <span>Адрес</span>
                        <input value={data.adress} placeholder={"Адрес"} onChange={event => edit('adress', event)}/>
                        <span className={styles.lastSpan}>Описание</span>
                        <input value={data.description} placeholder={"Описание мероприятия"}
                               className={styles.lastInput} onChange={event => edit('description', event)}/>
                    </div>
                    <button className={styles.addButton} onClick={addEvent}>Создать</button>
                </div>
            </div>
        </div>
    );
}

export default Modal;