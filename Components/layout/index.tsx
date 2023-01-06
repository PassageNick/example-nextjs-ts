// import custom components

import { ReactNode } from "react";
import Footer from "./footer";
import Header from "./header";


interface LayoutProps  {
    children?: ReactNode;
  };


export default function Layout({ children, ...props }: LayoutProps) {
    // styles the main html tag
    const styles = {
        display: "flex",
        flexDirection: "row"
    };
    return (
        <>
            <Header />
            <main {...props}>
                {children}
            </main>
            <Footer />
        </>
    );
}