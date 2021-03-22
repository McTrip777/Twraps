import React, { useEffect, useState } from 'react'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'
import jeep from "../img/jeep-wrap-1.png"
import mustang from "../img/mustang-wrap-1.jpg"
import truck from "../img/truck-wrap-1.jpeg"
import porche from "../img/porche-wrap-1.jpeg"

const images = [
    {
        image: jeep
    },
    {
        image: mustang
    },
    {
        image: truck
    },
    {
        image: porche
    }
]

const Carousel = () => {
    const [current, setCurrent] = useState(0)
    const length = images.length

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }
    // const prevSlide = () => {
    //     setCurrent(current === 0 ? length - 1 : current - 1)
    // }

    useEffect(() => {
        setTimeout(() => {
            nextSlide()
        }, 15000)
    }, [current])

    if (!Array.isArray(images) || images.length <= 0) return null

    return (
        <section className="slider">
            {/* <FaArrowAltCircleLeft className="leftArrow arrow" onClick={prevSlide} /> */}
            {images.map((slide, index) => {
                return (
                    <div className={index === current ? "slide active" : "slide"} key={index}>
                        {index === current && (<img src={slide.image} alt="vehicles" className="img" />)}
                    </div>
                )
            })}
            {/* <FaArrowAltCircleRight className="rightArrow arrow" onClick={nextSlide} /> */}

        </section>
    )
}

export default Carousel

