import ConsultationSection from "../../components/ConsultationSection";
import Footer from "../../components/Footer";
import IconsSection from "../../components/IconsSection";
import Icons from "../../components/IconsSection";
import ReserveSection from "../../components/ReserveSection";
import SectionGallery from "../../components/SectionGallery";
import styles from "./index.module.css"
import Layout from "../Layout/Layout";
import IntroSection from "../../components/IntroSection";

const MainPage = () =>{
  return (
    <div>
    <Layout>
      <IntroSection />
      <IconsSection />
      <ReserveSection />
      <SectionGallery />
      <ConsultationSection />
      </Layout>
      </div>
  );
}

export default MainPage;