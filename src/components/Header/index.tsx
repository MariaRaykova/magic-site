import styles from "./index.module.css"
import { FaPhoneAlt, FaEnvelope, FaFacebook, FaInstagramSquare } from "react-icons/fa"
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.infoLine}>
                <div className={styles.leftIcons}>
                    <span style={{ color: 'var(--secondary-color)', fontSize: '1.5rem', marginRight: '5px' }}> <FaFacebook /> <FaInstagramSquare /> </span>
                </div>
                <div className={styles.rightIcons}>
                    <span className={styles.textCall}><FaPhoneAlt style={{ color: 'var(--secondary-color)', fontSize: '1rem', marginRight: '5px' }} />
                        +359 <span style={{ color: 'var(--text-color)' }}>(888)</span> 888888
                    </span>
                </div>
            </div>

        </div>



    )
}
export default Header