import styles from "./index.module.css"
import SectionText from "../SectionText";
import { useTranslation } from "react-i18next";
const ReserveSection = () => {
    const { t } = useTranslation();
    return (
        <div className={styles.reserve}>
             <div className={styles.textWrapper} >
                 <SectionText title={t('reservationSection.title')} text={t('phone')}>
            <ul className={styles.items}>
                    <li className={styles.check}>{t('reservationSection.item1')}</li>
                    <li className={styles.check}>{t('reservationSection.item2')}</li>
                    <li className={styles.check}>{t('reservationSection.item3')}</li>
                </ul>
            </SectionText>
            </div>
        </div>
    )
}
export default ReserveSection ;