import React, { FC, useMemo } from 'react';
import { FaPhoneAlt, FaFacebook, FaInstagramSquare } from 'react-icons/fa'
import { useTranslation } from 'react-i18next';
import styles from './index.module.css'


const Header: FC = () => {
    const { t, i18n } = useTranslation();
    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };
    const languages = useMemo(() => [{
        id: 1,
        language: 'bg',
    }, {
        id: 2,
        language: 'en',
    }], [t])

    return (
        <div className={styles.header}>
            <div className={styles.infoLine}>
                <div className={styles.leftIcons}>
                    <span className={styles.span} >
                        <FaFacebook />
                        <FaInstagramSquare />
                    </span>
                </div>
                <div className={styles.rightIcons}>
                    <span className={styles.textCall}>
                        <FaPhoneAlt className={styles.span} />
                        {t('phone')}
                    </span>
                </div>
                <div className={styles.buttons}>
                    {languages.map(language => (
                        <button
                            key="language.id"
                            className={styles.button}
                            onClick={() => changeLanguage(`${language.language}`)}
                        >
                            {language.language}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Header
