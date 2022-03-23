import React from "react";
import styles from "./index.module.css"
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

const Navigation = () => {
    const { t } = useTranslation();
    return (
            <div className={styles.navigation}>
                 <NavLink className={(navData) => navData.isActive ? `${styles.active}` : "" } to="/" >{t('navigation.home')} </NavLink>
                 <NavLink className={(navData) => navData.isActive ? styles.active : `` } to="/gallery" >{t('navigation.gallery')} </NavLink>
                 <NavLink className={(navData) => navData.isActive ? styles.active : `` } to="/contacts" >{t('navigation.contacts')}</NavLink>
            </div>
    )
}
export default Navigation;
