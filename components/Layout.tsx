import React from "react";
import Head from "next/head";

import GlobalStyles from "./GlobalStyles";
import Nav from "./Nav";
import Main from "./Main";


type LayoutProps = {
    title?: string
}

const Layout: React.FC<LayoutProps> = ({ children, title }) => (
    <div>
        <Head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <title>{title}</title>
        </Head>
        <div>
            <GlobalStyles />
            <Nav />
            <Main>
                {children}
            </Main>
        </div>
    </div>

)
export default Layout