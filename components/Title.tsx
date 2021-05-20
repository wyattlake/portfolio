import { Svg } from "react-optimized-image";
import logo from "public/logo.svg";
import styles from "components/styles/Title.module.css";

type TitleProps = {
    title: string;
};

export const Title: React.FC<TitleProps> = (props) => {
    return (
        <>
            <div className={styles.titleLogo}>
                <Svg src={logo} />
            </div>
            <h1 className={styles.titleText}>{props.title}</h1>
            <div className={styles.vl}></div>
        </>
    );
};
