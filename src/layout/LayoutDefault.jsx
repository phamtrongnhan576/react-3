import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./template/Header";
import Footer from "./template/Footer";

const LayoutDefault = () => {
    return (
        <>
            <Header />
            <main className="my-[90px]">
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default LayoutDefault;
