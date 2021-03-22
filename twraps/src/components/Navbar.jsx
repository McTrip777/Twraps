import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../img/TWraps.png'

function Navbar() {
    return (
        <div className="navbar">
            <Link className="homeLogo" to="/"><img src={logo} /></Link>
            <div className="navbarRoutes">
                <Link to="/">Home</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </div>
    )
}

export default Navbar
