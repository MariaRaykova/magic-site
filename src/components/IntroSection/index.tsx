import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import SectionText from '../SectionText';
import styles from './index.module.css'

const IntroSection: FC = () => {
    const { t } = useTranslation();
    return (
        <div className={styles.intro} >
            <div className={styles.videoWrapper}>
                <div className={styles.overlay} />
                {/* <video
                    className={styles.video}
                    src="https://luzkar.com/images/video/video-lg.mp4"
                    autoPlay
                    loop
                    muted
                /> */}
            </div>
            <div className={styles.headerWrapper}>
                <SectionText
                    title={t('name')}
                    text={t('description')}
                />
            </div>
            <div className={styles.imageWrapper}>
                <img
                    src="/images/image1.png"
                />
            </div>
        </div>
    );
}
export default IntroSection;
