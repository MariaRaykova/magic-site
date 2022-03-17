import styles from "./index.module.css"


const ReserveSection = () => {
    return (
        <div className={styles.reserve}>
             <div className={styles.textWrapper}>
            <h1>Резервирайте Вашето Шоу</h1>
            <section>
                <span><i className="bi bi-check2-circle"></i></span><span>Магическо шоу</span>
                <span><i className="bi bi-check2-circle"></i></span><span>Частни програми</span>
                <span><i className="bi bi-check2-circle"></i></span><span>Сценични участия</span>
            </section>
            <p>Телефон: +359 88 888 888</p>
            </div>
        </div>
    )
}
export default ReserveSection ;