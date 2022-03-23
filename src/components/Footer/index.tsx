import React from "react"
import styles from "./index.module.css"
import { FaPhoneAlt, FaEnvelope, FaFacebook, FaInstagramSquare } from "react-icons/fa"
import { useTranslation } from "react-i18next"

const Footer = () => {
  const { t } = useTranslation()
  return (
    <div className={styles.footer}>
      <div className={styles.list}><h1 className={styles.title}>{t('footer.firstColumn.title')}</h1>
        <ul className={styles.items}>
          <li className={styles.arrow}>{t('footer.firstColumn.items.item1')}</li>
          <li className={styles.arrow}>{t('footer.firstColumn.items.item2')}</li>
          <li className={styles.arrow}>{t('footer.firstColumn.items.item3')}</li>
          <li className={styles.arrow}>{t('footer.firstColumn.items.item4')}</li>
          <li className={styles.arrow}>{t('footer.firstColumn.items.item5')}</li>
        </ul>
      </div>
      <div className={styles.contacts}>
        <h1 className={styles.title}>{t('footer.secondColumn.title')}</h1>
        <ul className={styles.items}>
          <li className={styles.phone}>{t('phone')}</li>
          <li className={styles.email}>{t('email')}</li>
        </ul>
      </div>
      <div className={styles.follow}>
        <h1 className={styles.title}>{t('name')}</h1>
        <p className={styles.text}>{t('description')}</p>
        <div className={styles.icons}>
          <span style={{ color: 'var(--secondary-color)', fontSize: '1.5rem', marginRight: '5px' }}> <FaFacebook /> <FaInstagramSquare /> </span>
        </div>
      </div>
      {/* <div className={styles.gallery}>
                <h1 className={styles.title}>Галерия</h1>
                    <img src="/images/image0.jpeg" />
                    <img src="/images/image0.jpeg" />
                    <img src="/images/image0.jpeg" />
                    <img src="/images/image0.jpeg" />
                    <img src="/images/image0.jpeg" />
                    <img src="/images/image0.jpeg" />
                    <img src="/images/image0.jpeg" />
                    <img src="/images/image0.jpeg" />
                    <img src="/images/image0.jpeg" />
            </div> */}
      <div className={styles.gallery}>
        <h1 className={styles.title}>Галерия</h1>

        <img src="/images/image0.jpeg" />
        <img src="/images/image0.jpeg" />
        <img src="/images/image0.jpeg" />
        <img src="/images/image0.jpeg" />
        <img src="/images/image0.jpeg" />
        <img src="/images/image0.jpeg" />
        <img src="/images/image0.jpeg" />
        <img src="/images/image0.jpeg" />
        <img src="/images/image0.jpeg" />

      </div>
      {/* <a target="_blank" href="https://icons8.com/icon/6wPGrsF25bmU/magic">Magic icon by Icons8</a> */}
    </div >
  )
}
export default Footer
