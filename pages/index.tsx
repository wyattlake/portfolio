import styles from "../styles/Home.module.css";
import { Navbar } from "../components/Navbar";
import { Button } from "../components/Button";
import Head from "next/head";
import Logo from "../public/svgs/logo.svg";
import Icon1 from "../public/svgs/icon1.svg";
import Icon2 from "../public/svgs/icon2.svg";
import Icon3 from "../public/svgs/icon3.svg";

export default function Home() {
    return (
        <>
            <Head>
                <meta charSet="UTF-8"></meta>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                ></meta>
                <title>Wyatt Lake's Portfolio</title>
            </Head>
            <main>
                <section className={styles.navbar}>
                    <Navbar />
                </section>
                <section className={styles.header}>
                    <Logo />
                    <h1 className={styles.headerText}>Hi, I'm Wyatt Lake</h1>
                    <Button text="Contact" />
                    <Button text="Github" />
                </section>
                <section className={styles.body}>
                    <div className={styles.glassBox}>
                        <div className={styles.shortParagraph}>
                            <div className={styles.sectionHeader}>
                                <h2 className={styles.sectionHeaderText}>
                                    About me
                                </h2>
                                <Icon1 className={styles.smallIcon} />
                            </div>
                            <p className={styles.sectionText}>
                                I’m a 14 year old programmer and designer from
                                California. I mainly work with Rust and
                                Typescript.
                            </p>
                        </div>
                        <div className={styles.shortParagraph}>
                            <div className={styles.sectionHeader}>
                                <h2 className={styles.sectionHeaderText}>
                                    Programming
                                </h2>
                                <Icon2 className={styles.smallIcon} />
                            </div>
                            <p className={styles.sectionText}>
                                Currently, I am working on a rasterizer written
                                in Rust and a notes application. You can check
                                them out on my Github.
                            </p>
                        </div>
                        <div className={styles.shortParagraph}>
                            <div className={styles.sectionHeader}>
                                <h2 className={styles.sectionHeaderText}>
                                    About this site
                                </h2>
                                <Icon3 className={styles.smallIcon} />
                            </div>
                            <p className={styles.sectionText}>
                                This site is a collection of all my best
                                programming projects and designs. In the future,
                                I plan on posting more in depth write-ups on
                                specific projects.
                            </p>
                        </div>
                    </div>
                </section>
                <section className={styles.background}></section>
            </main>
        </>
    );
}
