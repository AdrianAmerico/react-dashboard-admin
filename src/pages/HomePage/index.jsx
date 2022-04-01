import React from "react"
import { SideBar } from "../../components/SideBar"
import { Navbar } from "../../components/NavBar"
import { Widget } from "../../components/Widget"
import { Featured } from "../../components/Featured"
import { Chart } from "../../components/Chart"
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
                <div className="charts">
                    <Featured />
                    <Chart />
                </div>
            </div>
        </div>
    )
}

export default HomePage
