import styles from "./index.module.css"
import PhotosSection from "../PhotosSection"
import Button from "../Button";
import SectionText from "../SectionText";

const SectionGallery = () => {
    return (
        <div className={styles.gallery}>
            <SectionText title="Шоу Програми Галерия" text="Вижте още развлекателни програми">
            <PhotosSection />
            </SectionText>
            <Button />
        </div>
    )
}
export default SectionGallery;