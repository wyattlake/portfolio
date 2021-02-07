import React, { InputHTMLAttributes } from "react";
import styles from "./styles/RoundButton.module.css";

type RoundButtonProps = InputHTMLAttributes<HTMLInputElement> & {
    text: string;
};

export const RoundButton: React.FC<RoundButtonProps> = (props) => {
    return (
        <div {...props} className={styles.roundButton}>
            {props.text}
        </div>
    );
};
