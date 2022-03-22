import styles from "./index.module.css"
import PhotosSection from "../PhotosSection"
import Button from "../Button";
import SectionText from "../SectionText";
import { useTranslation } from "react-i18next";

const SectionGallery = () => {
    const { t } = useTranslation();
    return (
        <div className={styles.gallery}>
            <SectionText title={t('gallerySection.title')} text={t('gallerySection.text')}>
            <PhotosSection />
            </SectionText>
            <Button name={t('gallerySection.buttonText')} />
        </div>
    )
}
export default SectionGallery;