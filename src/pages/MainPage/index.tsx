
import { useEffect } from "react";
import ConsultationSection from "../../components/ConsultationSection";
import Footer from "../../components/Footer";
import Header from "../../components/Header"
import Icons from "../../components/Icons";
import Navigation from "../../components/Navigation";

import ReserveSection from "../../components/ReserveSection";
import SectionGallery from "../../components/SectionGallery";
import styles from "./index.module.css"

function MainPage(props: any) {
  
  return (
    <div >
      <Header />
      <div className={styles.main} >
      <Navigation />
        <p className={styles.imageWrapper}>
          <div className={styles.imageWrapper}>
            <div className={styles.headerWrapper}>
              <h1>Зойко Миленков</h1>
              <p>"Моят талант е не толкова да правя фокуси, колкото да вдъхновявам" </p>
            </div>
            <img src="/images/image1.png"></img>
          </div>
          <p className={styles.animation}>
          <video className={styles.video} src="/images/smoke.mp4" autoPlay muted loop></video>
        </p>
        </p>
      </div>
      <Icons />
      <ReserveSection />
      <SectionGallery />
      <ConsultationSection />
      <Footer />
    </div>
  );
}

export default MainPage;