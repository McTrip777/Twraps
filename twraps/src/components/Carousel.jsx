import React, { useEffect, useState } from 'react'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'
import jeep from "../img/jeep-wrap.webp"
import mustang from "../img/mustang-wrap.webp"

const images = [
    {
        image: jeep
    },
    {
        image: mustang
    }
    // ,
    // {
    //     image: 'https://images.unsplash.com/photo-1604776159603-cacfe8f4b46f?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDV8NnNNVmpUTFNrZVF8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    // },
    // {
    //     image: 'https://images.unsplash.com/photo-1489493585363-d69421e0edd3?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDh8NnNNVmpUTFNrZVF8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    // }
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

