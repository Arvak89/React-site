import PropTypes from "prop-types";
import IcArrowBack from "../../assets/icons/IcArrowBack.jsx";
import "typeface-lato";
import styles from "./PageHeader.module.css"

export default function PageHeader({
                                       text,
                                       onBackButtonClick,
                                   }) {

    return (
        <div className={styles.pageHeaderContainer}>
            {onBackButtonClick != null &&
                <IcArrowBack onClick={onBackButtonClick}/>
            }

            <div className={styles.pageHeaderText}>
                {text}
            </div>
        </div>
    )
}

PageHeader.propTypes = {
    text: PropTypes.string.isRequired,
    onBackButtonClick: PropTypes.func,
    props: PropTypes.node
};

PageHeader.defaultProps = {
    text: "",
    onBackButtonClick: null
}