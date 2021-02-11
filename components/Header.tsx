import Head from "next/head";

type HeaderProps = {
    title?: string;
};

export const Header: React.FC<HeaderProps> = (props) => {
    return (
        <Head>
            <meta charSet="UTF-8"></meta>
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            ></meta>
            <title>
                {props.title ? props.title : "Wyatt Lake's Portfolio"}
            </title>
        </Head>
    );
};
