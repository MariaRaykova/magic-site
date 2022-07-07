import React from 'react'


import styles from './About.module.css'


import { useTranslation } from 'react-i18next'

const About = () => {
  const { t } = useTranslation()

  return (
    <div className={styles.textPosition}>
      <div className={styles.text}>
      {t('about.textMain')}
        <div className={styles.textAdd}>
        {t('about.text')}
        </div>
      </div>
    </div>
  )
}

export default About
