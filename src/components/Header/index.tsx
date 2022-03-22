import { useState, useEffect } from "react";
import styles from "./index.module.css"
import { FaPhoneAlt, FaEnvelope, FaFacebook, FaInstagramSquare } from "react-icons/fa"
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Header = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng:string):void => {
      i18n.changeLanguage(lng);
    };
  
    return (
        <div className={styles.header}>
            <div className={styles.infoLine}>
                <div className={styles.leftIcons}>
                    <span style={{ color: 'var(--secondary-color)', fontSize: '1.5rem', marginRight: '5px' }}> <FaFacebook /> <FaInstagramSquare /> </span>
                </div>
                <div className={styles.rightIcons}>
                    <span className={styles.textCall}><FaPhoneAlt style={{ color: 'var(--secondary-color)', fontSize: '1rem', marginRight: '5px' }} />
                    {t('phone')}
                    </span>
                </div>
                <div className={styles.buttons}>
                <button className={styles.button} onClick={() => changeLanguage('bg')}>bg</button>
                <button className={styles.button} onClick={() => changeLanguage('en')}>en</button>
                <button className={styles.button} onClick={() => changeLanguage('rus')}>rus</button>
                </div>
            </div>
        </div>
    )
}

export default Header