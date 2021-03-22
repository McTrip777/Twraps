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
            <button className={type === 'All' ? "buttonSelect active" : "buttonSelect"} onClick={setToAll}>All</button>
            <button className={type === 'Commercial' ? "buttonSelect active" : "buttonSelect"} onClick={setToCommercial}>Commercial</button>
            <button className={type === 'Wall' ? "buttonSelect active" : "buttonSelect"} onClick={setToWall}>Wall</button>
            <button className={type === 'Color' ? "buttonSelect active" : "buttonSelect"} onClick={setToColor}>Color</button>

            {Images.map((img, index) => {
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
