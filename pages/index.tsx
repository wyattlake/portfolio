import styles from "../styles/Home.module.css";
import { Navbar } from "../components/Navbar";
import { Button } from "../components/Button";
import Logo from "../public/svgs/logo.svg";
import Head from "next/head";

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
                    <div className={styles.headerLeft}>
                        <div className={styles.headerLogo}>
                            <Logo />
                        </div>
                        <h1 className={styles.headerText}>
                            Hi, I'm Wyatt Lake
                        </h1>
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
                <section className={styles.body}>
                    <div className={styles.glassBox}>
                        <div className={styles.shortParagraph}>
                            <div className={styles.sectionHeader}>
                                <h2 className={styles.sectionHeaderText}>
                                    About me
                                </h2>
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
