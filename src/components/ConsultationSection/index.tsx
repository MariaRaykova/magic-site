import React from 'react';
import styles from './index.module.css'
import SectionText from '../SectionText';
import { useTranslation } from 'react-i18next';
const ConsultationSection = () => {
    const { t } = useTranslation();
    return (
        <div className={styles.consultation}>
             <div className={styles.textWrapper}>
             <SectionText title={t('consultationSection.title')} text={t('phone')}>
            </SectionText>
            </div>
        </div>
    )
}
export default ConsultationSection;
