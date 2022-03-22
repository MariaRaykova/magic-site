
import styles from "./index.module.css"
import { FaPhoneAlt, FaEnvelope, FaFacebook, FaInstagramSquare } from "react-icons/fa"
const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.list}><h1 className={styles.title}>Шоу програми</h1>
                <ul className={styles.items}>
                    <li className={styles.arrow}>Детски партита</li>
                    <li className={styles.arrow}>Шоу пред публика</li>
                    <li className={styles.arrow}>Сценични изяви</li>
                    <li className={styles.arrow}>Специални поводи</li>
                    <li className={styles.arrow}>Сезонна ангажираност</li>
                </ul>
            </div>
            <div className={styles.contacts}>
                <h1 className={styles.title}>Контакти</h1>
                <ul className={styles.items}>
                    <li className={styles.phone}>+359 888 88 88 </li>
                    <li className={styles.email}>email@email.com</li>
                </ul>
            </div>
            <div className={styles.follow}>
                <h1 className={styles.title}>Зойко Миленков</h1>
                <p className={styles.text}>"Моят талант е не толкова да правя фокуси, колкото да вдъхновявам" </p>
                <div className={styles.icons}>
                <span style={{ color: 'var(--secondary-color)', fontSize: '1.5rem', marginRight: '5px' }}> <FaFacebook /> <FaInstagramSquare /> </span>
                </div>
            </div>
            {/* <div className={styles.gallery}>
                <h1 className={styles.title}>Галерия</h1>
                    <img src="/images/image0.jpeg" />
                    <img src="/images/image0.jpeg" />
                    <img src="/images/image0.jpeg" />
                    <img src="/images/image0.jpeg" />
                    <img src="/images/image0.jpeg" />
                    <img src="/images/image0.jpeg" />
                    <img src="/images/image0.jpeg" />
                    <img src="/images/image0.jpeg" />
                    <img src="/images/image0.jpeg" />
            </div> */}
        </div>
    )
}
export default Footer;