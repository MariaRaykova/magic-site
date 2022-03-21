
import styles from "./index.module.css"

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
            <div className={styles.contacts}><h1 className={styles.title}>Контакти</h1>
                <ul className={styles.items}>
                    <li className={styles.phone}>+359 888 88 88 </li>
                    <li className={styles.email}>email@email.com</li>
                </ul>
                <div className={styles.icons}>
                    <span className={styles.iconCircle}>
                        <i className="bi bi-facebook"></i>
                    </span>
                    <span className={styles.iconCircle}>
                        <i className="bi bi-instagram"></i>
                    </span>
                </div>
            </div>
            <div className={styles.gallery}>
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
            </div>
            {/* <a target="_blank" href="https://icons8.com/icon/6wPGrsF25bmU/magic">Magic icon by Icons8</a> */}
        </div>
    )
}
export default Footer;