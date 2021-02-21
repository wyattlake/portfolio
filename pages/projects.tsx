import { Header } from "components/Header";
import { Navbar } from "components/Navbar";
import styles from "styles/Projects.module.css";
import { Title } from "components/Title";
import background from "svgs/projects/background.svg";
import rayTracerIcon from "svgs/projects/rayTracerIcon.svg";
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
                </div>
            </section>
            <Svg src={background} className={styles.background} />
        </>
    );
}
