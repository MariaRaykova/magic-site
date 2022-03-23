import React from 'react';
import ConsultationSection from '../../components/ConsultationSection';
import IconsSection from '../../components/IconsSection';
import ReserveSection from '../../components/ReserveSection';
import SectionGallery from '../../components/SectionGallery';
import styles from './index.module.css';
import IntroSection from '../../components/IntroSection';

function MainPage() {
  return (
    <div>
      <IntroSection />
      <div className={styles.main}>
        <p className={styles.imageWrapper}>
          <div className={styles.imageWrapper}>
            <div className={styles.headerWrapper}>
              <h1>Зойко Миленков</h1>
              <p>`&quot;`Моят талант е не толкова да правя фокуси, колкото да вдъхновявам`&quot;` </p>
            </div>
            <img src="/images/image1.png" />
          </div>
          <p className={styles.animation}>
            <video className={styles.video} src="/images/smoke.mp4" autoPlay muted loop />
          </p>
        </p>
      </div>
      <IconsSection />
      <ReserveSection />
      <SectionGallery />
      <ConsultationSection />
    </div>
  );
}

export default MainPage;
