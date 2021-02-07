import NextLink from "next/link";
import styles from "./styles/Navbar.module.css";

export const Navbar: React.FC = () => {
    return (
        <header className={styles.navbar}>
            <nav>
                <ul>
                    <li>
                        <NextLink href="/">
                            <p className={styles.navbarText}>Home</p>
                        </NextLink>
                        <NextLink href="/">
                            <p className={styles.navbarText}>Projects</p>
                        </NextLink>
                        <NextLink href="/">
                            <p className={styles.navbarText}>Resume</p>
                        </NextLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};
