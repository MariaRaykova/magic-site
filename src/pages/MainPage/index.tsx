
import { useEffect } from "react";
// import Header from "../../components/Header"
import Icons from "../../components/Icons";
// import Navigation from "../../components/Navigation";
import SwiperCoverflow from "../../components/Photos";
import styles from "./index.module.css"
import Layout from "../Layout/Layout";

function MainPage(props: any) {
  
  return (
    <Layout >
      {/* <Header />
      <Navigation /> */}
      <div className={styles.main} >
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
      <SwiperCoverflow />
    </Layout>
  );
}

export default MainPage;