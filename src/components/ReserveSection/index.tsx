import styles from "./index.module.css"
import SectionText from "../SectionText";

const ReserveSection = () => {
    return (
        <div className={styles.reserve}>
             <div className={styles.textWrapper} >
                 <SectionText title="Резервирайте Вашето Шоу" text="Телефон: +359 88 888 888">
            {/* <h1 className={styles.title}>Резервирайте Вашето Шоу</h1> */}
            <ul className={styles.items}>
                    <li className={styles.check}>Магическо шоу</li>
                    <li className={styles.check}>Частни програми</li>
                    <li className={styles.check}>Сценични участия</li>
                </ul>
            {/* <p>Телефон: +359 88 888 888</p> */}
            </SectionText>
            </div>
        </div>
    )
}
export default ReserveSection ;