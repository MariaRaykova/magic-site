import { Link } from 'react-router-dom';
import styles from './index.module.css';

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.infoLine}>
        <div className={styles.leftIcons}>
          <span className={styles.iconCircle}>
            <i className="bi bi-facebook" />
          </span>
          <span className={styles.iconCircle}>
            <i className="bi bi-instagram" />
          </span>
        </div>
        <div className={styles.rightIcons}>
          <span className={styles.iconCircle}>
            <i className="bi bi-telephone-fill" />
          </span>
          <p>
            +359 88 888 888
          </p>
        </div>
      </div>

    </div>

  );
}
export default Header;
