import React from "react"
import { SideBar } from "../../components/SideBar"
import { Navbar } from "../../components/NavBar"
import { Widget } from "../../components/Widget"
import "./home.scss"

const HomePage = () => {
    return (
        <div className="home">
            <SideBar />
            <div className="homeContainer">
                <Navbar />
                <div className="widgets">
                    <Widget type="user" />
                    <Widget type="order" />
                    <Widget type="earning" />
                    <Widget type="balance" />
                </div>
                Home container
            </div>
        </div>
    )
}

export default HomePage
