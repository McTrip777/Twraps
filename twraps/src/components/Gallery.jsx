import React, { useState } from 'react'
import { Images } from './ImgData'

const Gallery = () => {

    const [type, setType] = useState('Commercial')

    const setToAll = () => setType("All")
    const setToCommercial = () => setType("Commercial")
    const setToWall = () => setType("Wall")
    const setToColor = () => setType("Color")

    return (
        <div className="galleryContainer">
            <div className="gallerySort">
                <section className={type === 'All' ? "buttonSelect active" : "buttonSelect"} onClick={setToAll}>
                    <h4 className="allText">All</h4>
                    {type === "All" ? <i class="fas fa-circle"></i> : <i className="far fa-circle"></i>}
                </section>
                <section className={type === 'Commercial' ? "buttonSelect active" : "buttonSelect"} onClick={setToCommercial}>
                    <h4 className="commercialText">Commercial</h4>
                    {type === "Commercial" ? <i class="fas fa-circle"></i> : <i className="far fa-circle"></i>}
                </section>
                <section className={type === 'Wall' ? "buttonSelect active" : "buttonSelect"} onClick={setToWall}>
                    <h4 className="wallText">Wall</h4>
                    {type === "Wall" ? <i class="fas fa-circle"></i> : <i className="far fa-circle"></i>}
                </section>
                <section className={type === 'Color' ? "buttonSelect active" : "buttonSelect"} onClick={setToColor}>
                    <h4 className="colorText">Color</h4>
                    {type === "Color" ? <i class="fas fa-circle"></i> : <i className="far fa-circle"></i>}
                </section>
            </div>

            {Images.map((img, index) => {
                let val = false
                if (type === Images[index].type || type === "All") val = true
                if (val === false && index === Images.length - 1) {
                    return <h4>No Images at this time.</h4>
                }
                return (
                    <div className={type === Images[index].type || type === "All" ? "galleryImg active" : "galleryImg"} key={index}>
                        {type === "All" && <img src={img.img} alt="vehicles" className="img" />}
                        {type === Images[index].type && (<img src={img.img} alt="vehicles" className="img" />)}
                    </div>
                )
            })}

            {/* I'm Sorry, this page is down right now. <br/><br/>Check back later. */}
        </div>
    )
}

export default Gallery
