


import React from 'react'

import styles from './ContainerGallery.module.css'


const Image = (props: any) => {
    return <div>
        <img className={`${styles.img} ${styles.fade}`} key={props.path}
            src={props.path} alt=''
        />
    </div>
}

export default Image