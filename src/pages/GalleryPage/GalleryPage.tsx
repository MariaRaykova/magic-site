

import React, { useState } from 'react'

import styles from "./GalleryPage.module.css"

import ContainerGallery from './ContainerGallery/ContainerGallery'

import Layout from '../Layout/Layout'

const GalleryPage = () => {

    type type = {
        open: Boolean,
        imgPath: string,
    }

    const [state, setState] = useState<type>({
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
    return <Layout>
        <div className={styles.reserve}>
            <h1 className={styles.textWrapper}>Галерия</h1>
        </div>

        {state.open && <ContainerGallery imagePathLink={state.imgPath} allImages={images} handleClose={handleClose} />}

        <div className={`${styles.container} `}>
            {
                images.map((image, index) => (
                    // @ts-ignore
                    <img className={index % 2 === 0 ? `${styles.tall}` : `${styles.wide}`} key={image}
                        // @ts-ignore
                        onClick={() => handleOpen(image)}
                        // @ts-ignore
                        src={image} alt=''
                    />
                ))
            }
        </div>
        <div className={styles.reserve}></div>
    </Layout>
}

export default GalleryPage