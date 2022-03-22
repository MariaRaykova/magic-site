import { StringifyOptions } from "querystring";
import { StringLiteralLike } from "typescript";
import styles from "./index.module.css"

interface Props {
    name: string;
}
const Button = (props: Props) => {
    return (
       <button className={styles.buttonMain}>{props.name}</button>
    )
}
export default Button ;