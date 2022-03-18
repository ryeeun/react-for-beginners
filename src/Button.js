import PropTypes from "prop-types";
import styles from "./Button.module.css";

function Button({onClick, text}) {
    return (
        <button className={styles.btn} onClick={onClick}>{text}</button>
    );
}

Button.propTypes = {
    text : PropTypes.string.isRequired,
};
export default Button