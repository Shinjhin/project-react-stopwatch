import React from "react";
import styles from './Button.module.scss'

const Button = props => {
return(
    <div>
        <button className={styles.button} onClick={props.start}>Start</button>
      
        <button className={styles.button} onClick={props.pause}>Pause</button>

        <button className={styles.button} onClick={props.reset}>Reset</button>
    </div>
)
}
export default Button;