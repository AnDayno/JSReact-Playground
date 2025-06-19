import styles from './Button.module.css'

function Button() {

    /* 
    Inline Style
    const styles = {
        background-color: "hsl(200, 100%, 50%)";
        color: "white";
        padding: "10px 20px";
        border-radius: "5px";
        border: "none";
        cursor: "pointer";

        return(
        <button style={styles}>Click me</button>
        );
    }
    */ 

    //Module Style
    return(
    <button className={styles.button}>Click me</button>
    );
}

export default Button