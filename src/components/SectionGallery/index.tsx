import styles from "./index.module.css"
import PhotosSection from "../PhotosSection"
import Button from "../Button";

const SectionTitle = () => {
    return (
        <div className={styles.sectionTitle}>
   
            <h1>Шоу Програми Галерия</h1>
            <PhotosSection />
            <p>Вижте още развлекателни програми</p>
            <Button />
        </div>
    )
}
export default SectionTitle ;