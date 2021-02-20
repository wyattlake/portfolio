import { Header } from "components/Header";
import { Navbar } from "components/Navbar";
import styles from "styles/Projects.module.css";
import { Button } from "components/Button";
import { Title } from "components/Title";
import background from "svgs/projects/background.svg";
import { Svg } from "react-optimized-image";

export default function Projects() {
    return (
        <>
            <Header title="test" />
            <Navbar />
            <section className={styles.header}>
                <div className={styles.headerLeft}>
                    <Title title="Projects" />
                </div>
                <div className={styles.headerButtons}>
                    <Button
                        className={styles.button}
                        width={120}
                        text="Contact"
                    />
                    <Button
                        href="https://github.com/wyattlake"
                        width={120}
                        text="Github"
                    />
                </div>
            </section>
            <section>
                <div>
                    <p>projects text</p>
                </div>
            </section>
            <Svg src={background} className={styles.background} />
        </>
    );
}
