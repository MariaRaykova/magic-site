import styles from "./index.module.css";

interface Props {
    children?: React.ReactNode; 
    title: string;
    text:string;
}
const SectionFrame= (props:Props) => {
    return (
        <div>
            <h1 className={styles.sectionTitle}>{props.title}</h1>
            {props.children}
            <p className={styles.sectionText}>{props.text}</p>
        </div>
    )
}
export default SectionFrame ;