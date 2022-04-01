import React from "react"
import { SideBar } from "../../components/SideBar"
import { Navbar } from "../../components/NavBar"
import "./home.scss"

const HomePage = () => {
    return (
        <div className="home">
            <SideBar />
            <div className="homeContainer">
                <Navbar />
                Home container
            </div>
        </div>
    )
}

export default HomePage
