import {Link} from "react-router-dom";
import styles from "./NavigationButton.module.css"

function NavigationButton(props) {// нужно сюда передавать url страницы

    return (
        <div>
            <Link to={props.url}>
                <button className={styles.NavigationButton}>{props.text}</button>
            </Link>
        </div>
    );
}

export default NavigationButton;