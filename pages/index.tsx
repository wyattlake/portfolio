import styles from "styles/Home.module.css";
import { Navbar } from "components/Navbar";
import { Button } from "components/Button";
import { Svg } from "react-optimized-image";
import logo from "svgs/logo.svg";
import icon1 from "svgs/icon1.svg";
import icon2 from "svgs/icon2.svg";
import icon3 from "svgs/icon3.svg";
import background from "svgs/background.svg";
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
            <main className={styles.main}>
                <section className={styles.navbar}>
                    <Navbar />
                </section>
                <section className={styles.header}>
                    <div className={styles.headerLeft}>
                        <div className={styles.headerLogo}>
                            <Svg src={logo} />
                        </div>
                        <h1 className={styles.headerText}>
                            Hi, I'm Wyatt Lake
                        </h1>
                        <div className={styles.vl}></div>
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
                        <div className={styles.sections}>
                            <div className={styles.sectionAbout}>
                                <div className={styles.sectionHeader}>
                                    <h2 className={styles.sectionHeaderText}>
                                        About me
                                    </h2>
                                    <div className={styles.icon1}>
                                        <Svg src={icon1} />
                                    </div>
                                </div>
                                <p className={styles.sectionText}>
                                    I’m a 14 year old programmer and designer
                                    from California. I mainly work with Rust and
                                    Typescript.
                                </p>
                            </div>
                            <div className={styles.sectionProgramming}>
                                <div className={styles.sectionHeader}>
                                    <h2 className={styles.sectionHeaderText}>
                                        Programming
                                    </h2>
                                    <div className={styles.icon2}>
                                        <Svg src={icon2} />
                                    </div>
                                </div>
                                <p className={styles.sectionText}>
                                    Currently, I am working on a rasterizer
                                    written in Rust and a notes application. You
                                    can check them out on my Github.
                                </p>
                            </div>
                            <div className={styles.sectionSite}>
                                <div className={styles.sectionHeader}>
                                    <h2 className={styles.sectionHeaderText}>
                                        About this site
                                    </h2>
                                    <div className={styles.icon3}>
                                        <Svg src={icon3} />
                                    </div>
                                </div>
                                <p className={styles.sectionText}>
                                    This site is a collection of all my best
                                    programming projects and designs. In the
                                    future, I plan on posting more in depth
                                    write-ups on specific projects.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Svg src={background} className={styles.background} />
        </>
    );
}
