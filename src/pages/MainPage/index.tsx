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
      <IconsSection />
      <ReserveSection />
      <SectionGallery />
      <ConsultationSection />
    </div>
  );
}
export default MainPage;
