import React, { FC } from 'react';
import styles from './index.module.css'
import SectionText from '../../components/SectionText';
import { useTranslation } from 'react-i18next';
const NotFound: FC = () => {
    const { t } = useTranslation();
    return (
        <div className={styles.notFound}>
            <SectionText title={t('')} text={t('notFound.title')} />
        </div>
    )
}
export default NotFound;
