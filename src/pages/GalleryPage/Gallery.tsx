

import React from 'react'

import styles from "./Gallery.module.css"



const Gallery = () => {

    function importAll(r: { keys: () => any[] }) {
        // @ts-ignore
        return r.keys().map(r)
    }

    const images = importAll(require.context('../../Assets', false, /\.(png|jpe?g|svg)$/))

    const handleLeftClick = () => {

    }
    const handleRightClick = () => {

    }

    return <div>
        <button onClick={handleLeftClick}>left</button>
        <button onClick={handleRightClick}>Right</button>
        
        <div className={`${styles.container} `}>


            {
                images.map(image => (
                    // @ts-ignore
                    <img  src={image} alt='' />
                ))

            }

        </div>
    </div>
}

export default Gallery