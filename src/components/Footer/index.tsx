import React, { useMemo } from 'react'
import styles from './index.module.css'
import { FaFacebook, FaInstagramSquare } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'

const Footer = () => {
  const { t } = useTranslation()
  const items = useMemo(() => (
    Array.from({ length: 5 }).map((_, index) => ({
      id: index,
      message: `footer.firstColumn.items.item${index + 1}`
    })
    )), [t])

  return (
    <div className={styles.footer}>
      <div className={styles.list}>
        <h1 className={styles.title}>{t('footer.firstColumn.title')}</h1>
        <ul className={styles.items}>
          {items.map(item => (
            <li
              key={item.id}
              className={styles.arrow}
            >
              {t(item.message)}
            </li>
          ))}
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
          <span className={styles.span}>
            <FaFacebook />
            <FaInstagramSquare />
          </span>
        </div>
      </div>
      {/* <a target="_blank" href="https://icons8.com/icon/6wPGrsF25bmU/magic">Magic icon by Icons8</a> */}
    </div >
  )
}
export default Footer
