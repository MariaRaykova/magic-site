import React, { useMemo } from 'react';
import styles from './index.module.css'
import SectionText from '../SectionText';
import { useTranslation } from 'react-i18next';

const ReserveSection = () => {
    const { t } = useTranslation();
    const items = useMemo(() => (
        Array.from({ length: 3 }).map((_, index) => ({
            id: index,
            message: `reservationSection.item${index + 1}`
        })
        )), [t])
        
    return (
        <div className={styles.reserve}>
            <div className={styles.textWrapper} >
                <SectionText title={t('reservationSection.title')} text={t('phone')}>
                    <ul className={styles.items}>
                        {items.map(item => (
                            <li
                                key={item.id}
                                className={styles.check}
                            >
                                {t(item.message)}
                            </li>
                        ))}
                    </ul>
                </SectionText>
            </div>
        </div>
    )
}
export default ReserveSection;
