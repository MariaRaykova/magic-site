import React from 'react';
import styles from './index.module.css'
import { useTranslation } from 'react-i18next';


const Icons = () => {
    const { t } = useTranslation();
    return (
        <div className={styles.icons}>
        <span>
        <img src="https://img.icons8.com/external-icongeek26-glyph-icongeek26/64/000000/external-magic-magic-and-fairy-tale-icongeek26-glyph-icongeek26-2.png"/>
        <p className={styles.text}>{t('iconsSection.text1')}</p>
        </span>
        <span>
        <img src="https://img.icons8.com/external-outline-icons-pause-08/64/000000/external-magic-party2-outline-icons-pause-08.png"/>
        <p className={styles.text}>{t('iconsSection.text2')}</p>
        </span>
        <span>
        <img src="https://img.icons8.com/external-out-line-pongsakorn-tan/64/000000/external-magic-nightlife-out-line-pongsakorn-tan.png"/>
        <p className={styles.text}>{t('iconsSection.text3')}</p>
        </span>
        <span>
        <img src="https://img.icons8.com/external-others-phat-plus/64/000000/external-magic-design-thinking-outline-others-phat-plus.png"/>
        <p className={styles.text}>{t('iconsSection.text4')}</p>
        </span>
    </div>

  );
}
export default Icons;
