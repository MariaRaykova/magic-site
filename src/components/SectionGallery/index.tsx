import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './index.module.css';
import PhotosSection from '../PhotosSection';
import Button from '../Button';
import SectionText from '../SectionText';
import { useTranslation } from 'react-i18next';

const SectionGallery = () => {
    const navigate = useNavigate();
    const clickHandler = (): void => {
        navigate('/gallery');
    }
    const { t } = useTranslation();
    return (
        <div className={styles.gallery}>
            <SectionText title={t('gallerySection.title')} text={t('gallerySection.text')}>
                <PhotosSection />
            </SectionText>
            <Button name={t('gallerySection.buttonText')} handleClick={clickHandler}/>
        </div>
    )
}
export default SectionGallery;
