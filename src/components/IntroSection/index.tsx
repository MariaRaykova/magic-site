import styles from "./index.module.css"
import SectionText from "../SectionText";

const IntroSection = () => {
    return (
        <div className={styles.intro} >
            <div className={styles.videoWrapper}>
                <div className={styles.overlay}></div>
                <video className={styles.video} src="https://luzkar.com/images/video/video-lg.mp4" autoPlay loop muted>   </video>
            </div>
            <div className={styles.headerWrapper}>
                <SectionText title="Зойко Миленков" text="Моят талант е не толкова да правя фокуси, колкото да вдъхновявам"></SectionText>
            </div>
            <div className={styles.imageWrapper}>
                <img src="/images/image1.png"></img>
            </div>
        </div>

    );
}

export default IntroSection;