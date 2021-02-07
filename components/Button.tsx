import React, { InputHTMLAttributes } from "react";
import styles from "./styles/Button.module.css";

type ButtonProps = InputHTMLAttributes<HTMLInputElement> & {
    text: string;
};

export const Button: React.FC<ButtonProps> = (props) => {
    return (
        <div {...props} className={styles.roundButton}>
            <p className={styles.buttonText}>{props.text}</p>
        </div>
    );
};
