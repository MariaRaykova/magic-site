import styles from "./index.module.css"
import SectionText from "../SectionText";
import { useTranslation } from "react-i18next";

const IntroSection = () => {
    const { t } = useTranslation();
    return (
        <div className={styles.intro} >
            <div className={styles.videoWrapper}>
                <div className={styles.overlay}></div>
                <video className={styles.video} src="https://luzkar.com/images/video/video-lg.mp4" autoPlay loop muted>   </video>
            </div>
            <div className={styles.headerWrapper}>
                <SectionText title={t('name')} text={t('description')}></SectionText>
            </div>
            <div className={styles.imageWrapper}>
                <img src="/images/image1.png"></img>
            </div>
        </div>

    );
}

export default IntroSection;