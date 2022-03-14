
import Header from "../../components/Header"
import styles from "./index.module.css"

function MainPage(props: any) {
  return (
    <div >
      <Header />
      <div className={styles.main} >
        <div className={`${styles.gridBg} ${styles.baGrid} ${styles.anim}`}>
          <div className={styles.inner}>
            Main Page
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;