import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import SectionText from '../SectionText';
import styles from './index.module.css'

const ConsultationSection: FC = () => {
    const { t } = useTranslation();

    return (
        <div className={styles.consultation}>
            <div className={styles.textWrapper}>
                <SectionText
                    title={t('consultationSection.title')}
                    text={t('phone')}
                />
            </div>
        </div>
    )
}

export default ConsultationSection;
