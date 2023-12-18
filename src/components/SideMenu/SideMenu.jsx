import styles from "./SideMenu.module.css"
import logo from "../../assets/images/rocket.png"
import NavigationButton from "../NavigationButton/NavigationButton.jsx";

function SideMenu() {

    return (
        <div className={styles.SideMenu}>
            <img className={styles.logo} src={logo} alt={"Логотип"}/>
                <NavigationButton url={"/"} text={"Мероприятия"}/>
                <NavigationButton url={"/members"} text={"Участники сообщества"}/>
        </div>
    );
}

export default SideMenu;