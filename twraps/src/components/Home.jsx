import React from 'react'
import Carousel from './Carousel'
import TWraps from '../img/TWraps.png'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className="homeContainer">
            <header className="head">
                <img src={TWraps} alt="" className="TWrapsImg" />
                <h2 className="headTitle">Auto Wraps of Boise</h2>
                <Link to="/contact" className="titleButton" >Get a Quote</Link>
                <Carousel />
            </header>
            <section className="about">
                <h4 className="aboutTwraps">About Us</h4>
                <p className="aboutText">Here at T-Wraps, we provide large format prints for vinyl wraps of all kinds. Wraps can serve multiple purposes. It can be used to advertise and brand your business, attracting more customers, or simply to please the eye of the viewer. Our team can accomplish any task you desire in a wrap as we provide the graphics, fabrication, and installation for wraps of all kinds. We also provide color wraps of your choice for your vehicle. We do everything in-house and bring decades of experience to every job.</p>
            </section>

        </div>
    )
}

export default Home
