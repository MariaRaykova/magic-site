import React from 'react';
import styles from './index.module.css'

interface Props {
    name: string;
    handleClick: React.MouseEventHandler<HTMLButtonElement>;
}
const Button = ({name, handleClick}: Props) => {
    return (
       <button onClick={handleClick} className={styles.buttonMain}>{name}</button>
    )
}
export default Button;
