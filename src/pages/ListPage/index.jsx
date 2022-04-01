import React from "react"
import { Navbar } from "../../components/NavBar"
import { SideBar } from "../../components/SideBar"
import { Datatable } from "../../components/Datatable"
import "./listpage.scss"

const ListPage = () => {
    return (
        <div className="list">
            <SideBar />
            <div className="listContainer">
                <Navbar />
                <Datatable />
            </div>
        </div>
    )
}

export default ListPage
