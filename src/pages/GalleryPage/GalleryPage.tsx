import React, { useState } from 'react'

import styles from './GalleryPage.module.css'

import ContainerGallery from './ContainerGallery/ContainerGallery'

import Layout from '../Layout/Layout'



type type = {
  open: boolean,
  imgPath: string,
}

function GalleryPage() {
  const [state, setState] = useState<type>({
    open: false,
    imgPath: '',
  })

  const importAll = (assets: __WebpackModuleApi.RequireContext) =>

    assets.keys().map(assets)

  const images = importAll(require.context('../../Assets', false, /\.(png|jpe?g|svg)$/))

  const handleOpen = (imgLink: string) => {
    setState((prevState) => ({ ...prevState, open: true, imgPath: imgLink }))
  }

  const handleClose = () => {
    setState((prevState) => ({ ...prevState, open: false }))
  }

  return (
    <Layout>
      <div className={styles.reserve}>
        <h1 className={styles.textWrapper}>Галерия</h1>
      </div>

      {state.open && <ContainerGallery imagePathLink={state.imgPath} allImages={images} handleClose={handleClose} />}

      <div className={`${styles.container} `}>
        {
          images.map((image: any, index: number) => (
            <img
              className={index % 2 === 0 ? `${styles.tall}` : `${styles.wide}`}
              key={image}
              onClick={() => handleOpen(image)}
              src={image}
              alt=""
            />
          ))
        }
      </div>
      <div className={styles.reserve} />
    </Layout>
  )
}

export default GalleryPage
