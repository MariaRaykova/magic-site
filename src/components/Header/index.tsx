import styles from "./index.module.css"


const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.infoLine}>
                <div className={styles.leftIcons}>
                    <span className={styles.iconCircle}>
                    <i className="bi bi-facebook"></i>
                    </span>
                    <span className={styles.iconCircle}>
                    <i className="bi bi-instagram"></i>
                    </span>
                </div>
                <div className={styles.rightIcons}>
                    <span className={styles.iconCircle}>
                    <i className="bi bi-telephone-fill"></i>
                    </span>
                    <p>
                        +359 88 888 888
                    </p>
                </div>
            </div>
            <div className={styles.navigation}>
                Blag
            </div>
        </div>
    )
}
export default Header