
import styles from './Button.module.css';

function Button() {
    const styless = {
        borderRadius: "8px",
        border: "1px solid transparent",
        padding: "0.6em 1.2em",
        fontSize: "1em",
        fontWeight: "500",
        fontFamily: "inherit",
        backgroundColor: "#1a1a1a",
        cursor: "pointer",
        transition: "border-color 0.25s"
    };

    return (
        <button style={styless}>Click me</button>
    );
}

export default Button;