import styles from "./index.module.css"


const IntroSection = () => {
    return (
        <div className={styles.intro} >
            <div className={styles.videoWrapper}>
            <div className={styles.overlay}></div>
            <video className={styles.video}  src="https://luzkar.com/images/video/video-lg.mp4" autoPlay loop muted>   </video>
            </div>  
                    <div className={styles.headerWrapper}>
                        <h1>Зойко Миленков</h1>
                        <p>"Моят талант е не толкова да правя фокуси, колкото да вдъхновявам" </p>
                    </div>
                    <div className={styles.imageWrapper}>
                        <img src="/images/image1.png"></img>
                    </div>
                 
        </div>

    );
}

export default IntroSection;