import React, { useState } from 'react';

import ContainerGallery from './ContainerGallery/ContainerGallery';
import Layout from '../Layout/Layout';
import { arrImg } from './Import_Images';

import styles from './GalleryPage.module.css';
import { useTranslation } from 'react-i18next';

type type = {
  open: boolean;
  imgPath: string;
};

const GalleryPage = () => {
  const { t } = useTranslation();
  const [state, setState] = useState<type>({
    open: false,
    imgPath: '',
  });

  // @Taking images from pointed directory
  // const importAll = (assets: __WebpackModuleApi.RequireContext) => assets.keys().map(assets)
  // const images = importAll(require.context('../../assets', false, /\.(png|jpe?g|svg)$/))

  const handleOpen = (imgLink: string) => {
    setState((prevState) => ({ ...prevState, open: true, imgPath: imgLink }));
  };

  const handleClose = () => {
    setState((prevState) => ({ ...prevState, open: false }));
  };

  return (
    <>
      <div className={styles.reserve}>
        <h1 className={styles.textWrapper}>{t('gallery.title')}</h1>
      </div>

      {state.open && <ContainerGallery imagePathLink={state.imgPath} allImages={arrImg} handleClose={handleClose} />}

      <div className={`${styles.container} `}>
        {
          arrImg.map((image: unknown, index: number) => (
            <img
              className={index % 2 === 0 ? `${styles.tall}` : `${styles.wide}`}
              key={image as string}
              onClick={() => handleOpen(image as string)}
              src={image as string}
              alt={image as string}
            />
          ))
        }
      </div>
      <div className={styles.reserve} />
    </>
  );
};

export default GalleryPage;
