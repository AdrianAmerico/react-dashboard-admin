import React from "react"
import "./home.scss"
import { SideBar } from "../../components/SideBar"
const HomePage = () => {
    return (
        <div className="home">
            <SideBar />
            <div className="homeContainer">
                container
            </div>
        </div>
    )
}

export default HomePage
