import React, { FC, HtmlHTMLAttributes } from 'react';
import styles from './index.module.css'

interface Props extends HtmlHTMLAttributes<HTMLButtonElement> {
    name: string;
    onClick: (event: React.MouseEvent) => void;
}
const Button: FC<Props> = ({ name, ...restProps }) => (
    <button
        {...restProps}
        className={styles.buttonMain}
    >
        {name}
    </button>
)
export default Button;
