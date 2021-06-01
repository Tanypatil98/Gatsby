import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import "../styles/index.scss";
import * as layoutStyle from './layout.module.scss'

const Layout = (props) => {
    return (
        <div className={layoutStyle.container}>
            <Header />
            <div className={layoutStyle.content}>
                {props.children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout