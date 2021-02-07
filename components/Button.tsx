import React, { HTMLProps } from "react";
import styles from "./styles/Button.module.css";
import NextLink from "next/link";

type ButtonProps = HTMLProps<HTMLDivElement> & {
    text: string;
    width: number;
    href?: string;
};

export const Button: React.FC<ButtonProps> = (props) => {
    if (props.href) {
        return (
            <NextLink href={props.href}>
                <div
                    {...props}
                    className={styles.button}
                    style={{ width: props.width }}
                >
                    <p className={styles.buttonText}>{props.text}</p>
                </div>
            </NextLink>
        );
    } else {
        return (
            <div
                {...props}
                className={styles.button}
                style={{ width: props.width }}
            >
                <p className={styles.buttonText}>{props.text}</p>
            </div>
        );
    }
};
