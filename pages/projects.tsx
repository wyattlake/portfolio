import { Header } from "components/Header";
import { Navbar } from "components/Navbar";
import styles from "styles/Projects.module.css";
import { Title } from "components/Title";
import background from "svgs/projects/background.svg";
import rayTracerIcon from "svgs/projects/rayTracerIcon.svg";
import soulSuckerIcon from "svgs/projects/soulSuckerIcon.svg";
import rasterizerIcon from "svgs/projects/rasterizerIcon.svg";
import noiseIcon from "svgs/projects/noiseIcon.svg";
import notesIcon from "svgs/projects/notesIcon.svg";
import twitterSentimentsIcon from "svgs/projects/twitterSentimentsIcon.svg";
import logo from "svgs/logo.svg";
import { Svg } from "react-optimized-image";

export default function Projects() {
    return (
        <>
            <Header />
            <Navbar />
            <section className={styles.header}>
                <div className={styles.headerLeft}>
                    <Title title="Projects" />
                </div>
            </section>
            <section>
                <div className={styles.projects}>
                    <div className={styles.project}>
                        <Svg
                            src={rayTracerIcon}
                            className={styles.rayTracerIcon}
                        />
                        <div className={styles.projectText}>
                            <h2 className={styles.projectsHeader}>
                                Rust Ray Tracer
                            </h2>
                            <p className={styles.projectsInfo}>Graphics</p>
                        </div>
                    </div>
                    <div className={styles.project}>
                        <Svg
                            src={soulSuckerIcon}
                            className={styles.soulSuckerIcon}
                        />
                        <div className={styles.projectText}>
                            <h2 className={styles.projectsHeader}>
                                Soul Sucker
                            </h2>
                            <p className={styles.projectsInfo}>Game</p>
                        </div>
                    </div>
                    <div className={styles.project}>
                        <Svg
                            src={rasterizerIcon}
                            className={styles.rasterizerIcon}
                        />
                        <div className={styles.projectText}>
                            <h2 className={styles.projectsHeader}>
                                Rust Rasterizer
                            </h2>
                            <p className={styles.projectsInfo}>Graphics</p>
                        </div>
                    </div>
                    <div className={styles.project}>
                        <Svg src={noiseIcon} className={styles.noiseIcon} />
                        <div className={styles.projectText}>
                            <h2 className={styles.projectsHeader}>Go Noise</h2>
                            <p className={styles.projectsInfo}>Noise</p>
                        </div>
                    </div>
                    <div className={styles.project}>
                        <Svg src={notesIcon} className={styles.notesIcon} />
                        <div className={styles.projectText}>
                            <h2 className={styles.projectsHeader}>Notes App</h2>
                            <p className={styles.projectsInfo}>Web</p>
                        </div>
                    </div>
                    <div className={styles.project}>
                        <Svg
                            src={twitterSentimentsIcon}
                            className={styles.twitterSentimentsIcon}
                        />
                        <div className={styles.projectText}>
                            <h2 className={styles.projectsHeader}>
                                Twitter Analysis
                            </h2>
                            <p className={styles.projectsInfo}>Data</p>
                        </div>
                    </div>
                    <div className={styles.project}>
                        <Svg src={logo} className={styles.portfolioIcon} />
                        <div className={styles.projectText}>
                            <h2 className={styles.projectsHeader}>
                                Web Portfolio
                            </h2>
                            <p className={styles.projectsInfo}>Web</p>
                        </div>
                    </div>
                </div>
            </section>
            <Svg src={background} className={styles.background} />
        </>
    );
}
