import React, { FC } from 'react';
import ConsultationSection from '../../components/ConsultationSection';
import IconsSection from '../../components/IconsSection';
import ReserveSection from '../../components/ReserveSection';
import SectionGallery from '../../components/SectionGallery';
import IntroSection from '../../components/IntroSection';

const MainPage: FC = () => (
  <>
    <IntroSection />
    <IconsSection />
    <ReserveSection />
    <SectionGallery />
    <ConsultationSection />
  </>
)
export default MainPage;
