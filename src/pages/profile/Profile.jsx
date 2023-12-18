import styles from "./Profile.module.css"
import PageHeader from "../../components/ PageHeader/PageHeader.jsx";
import {useNavigate} from "react-router";
import {mockModels} from "../../apiServices/events/EventModel.js";


function Profile() {
    const navigate = useNavigate();

    let hobbies = [
        "компьютерные игры",
        "спорт",
        "машины",
        "шитьё",
        "чтение",
        "мытьё рук",
        "чтение",
        "чтение",
        "чтение",
    ];

    let history = mockModels;

    const onBackButtonClick = () => {
        navigate('/members');
    }

    return (
        <div className={styles.Profile}>
            <PageHeader text={"Информация об участнике"} onBackButtonClick={onBackButtonClick}/>
            <div className={styles.ProfileContent}>
                <div className={styles.userBasic}>
                    <h1 className={styles.userName}>Иван Иванов</h1>
                    <p className={styles.email}>ctorkey@gmail.com</p>
                    <button className={styles.addButton}>Отправить сообщение</button>
                </div>
                <div className={styles.hobbies}>
                    {hobbies && hobbies.map((str, index) => (
                            <span key={index} className={styles.hobby}>{str}</span>
                        ))}
                </div>
                <div className={styles.statistics}>
                    {history.map((event, index) => (
                        <div key={index} className={styles.event}>
                            <div>
                                <div className={styles.eventItemTitle}>
                                    {event.title}
                                </div>
                                <div className={styles.eventItemDate}>
                                    {event.date}
                                </div>
                            </div>
                        </div>
                        ))}
                </div>
            </div>
        </div>
    );
}

export default Profile;