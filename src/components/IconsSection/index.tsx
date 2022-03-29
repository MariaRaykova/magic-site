import React, { FC, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './index.module.css'

const Icons: FC = () => {
  const { t } = useTranslation();
  
  const icons = useMemo(() => [{
    id: 1,
    src: 'https://img.icons8.com/external-icongeek26-glyph-icongeek26/64/000000/external-magic-magic-and-fairy-tale-icongeek26-glyph-icongeek26-2.png',
  }, {
    id: 2,
    src: 'https://img.icons8.com/external-outline-icons-pause-08/64/000000/external-magic-party2-outline-icons-pause-08.png',
  }, {
    id: 3,
    src: 'https://img.icons8.com/external-out-line-pongsakorn-tan/64/000000/external-magic-nightlife-out-line-pongsakorn-tan.png',
  },
  {
    id: 4,
    src: 'https://img.icons8.com/external-others-phat-plus/64/000000/external-magic-design-thinking-outline-others-phat-plus.png',
  }], [t])

  return (
    <div className={styles.icons}>
      {icons.map((icon) => (
        <span key={icon.id}>
          <img src={icon.src} />
          <p className={styles.text}>
            {t(`iconsSection.text${icon.id}`)}
          </p>
        </span>
      ))}
    </div>
  );
}
export default Icons;
