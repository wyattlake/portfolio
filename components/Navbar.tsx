import NextLink from "next/link";

export const Navbar: React.FC = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <NextLink href="/">
                            <p>Home</p>
                        </NextLink>
                        <NextLink href="/">
                            <p>Projects</p>
                        </NextLink>
                        <NextLink href="/">
                            <p>Resume</p>
                        </NextLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};
