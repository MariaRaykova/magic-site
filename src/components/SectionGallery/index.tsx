import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import PhotosSection from '../PhotosSection';
import Button from '../Button';
import SectionText from '../SectionText';
import styles from './index.module.css';

const SectionGallery: FC = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();
    
    const clickHandler = (): void => {
        navigate('/gallery');
    }

    return (
        <div className={styles.gallery}>
            <SectionText
                title={t('gallerySection.title')}
                text={t('gallerySection.text')}
            >
                <PhotosSection />
            </SectionText>
            <Button
                name={t('gallerySection.buttonText')}
                onClick={clickHandler}
            />
        </div>
    )
}
export default SectionGallery;
