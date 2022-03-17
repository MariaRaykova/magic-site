import styles from "./index.module.css"

import { Link } from "react-router-dom";

const Icons = () => {
   
    return (
        <div className={styles.icons}>
        <span>
        <img src="https://img.icons8.com/external-icongeek26-glyph-icongeek26/64/000000/external-magic-magic-and-fairy-tale-icongeek26-glyph-icongeek26-2.png"/>
        </span>
        <span>
        <img src="https://img.icons8.com/external-outline-icons-pause-08/64/000000/external-magic-party2-outline-icons-pause-08.png"/>
        </span>
        <span>
        <img src="https://img.icons8.com/external-out-line-pongsakorn-tan/64/000000/external-magic-nightlife-out-line-pongsakorn-tan.png"/>
        </span>
        <span>
        <img src="https://img.icons8.com/external-others-phat-plus/64/000000/external-magic-design-thinking-outline-others-phat-plus.png"/>
        </span>
    </div>

 

    )
}
export default Icons;