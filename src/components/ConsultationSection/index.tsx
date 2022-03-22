import styles from "./index.module.css"
import SectionText from "../SectionText";

const ConsultationSection = () => {
    return (
        <div className={styles.consultation}>
             <div className={styles.textWrapper}>
             <SectionText title="Консулатции и резарвация" text="Телефон: +359 88 888 888">
            </SectionText>
            </div>
        </div>
    )
}
export default ConsultationSection ;