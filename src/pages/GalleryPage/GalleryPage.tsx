

import React, { useState } from 'react'

import styles from "./GalleryPage.module.css"

import ContainerGallery from './ContainerGallery/ContainerGallery'

const GalleryPage = () => {

    type SongType = {
        open: Boolean,
        imgPath: string,
    }

    const [state, setState] = useState<SongType>({
        open: false,
        imgPath: '',
    })

    function importAll(r: { keys: () => any[] }) {
        // @ts-ignore
        return r.keys().map(r)
    }

    const images = importAll(require.context('../../Assets', false, /\.(png|jpe?g|svg)$/))
    
    const handleOpen = (imgLink: string) => {
        setState((prevState) => {
            return { ...prevState, open: true }
        })
        setState((prevState) => {
            return { ...prevState, imgPath: imgLink }
        })
    }

    const handleClose = () => {
        setState((prevState) => {
            return { ...prevState, open: false }
        })
    }

    return <div>

        {state.open && <ContainerGallery imagePathLink={state.imgPath} allImages={images} handleClose={handleClose} />}

        <div className={`${styles.container} `}>
            {
                images.map(image => (
                    // @ts-ignore
                    <img className={styles.img} key={image}
                        // @ts-ignore
                        onClick={() => handleOpen(image)}
                        // @ts-ignore
                        src={image} alt=''
                    />
                ))
            }
        </div>
    </div>
}

export default GalleryPage