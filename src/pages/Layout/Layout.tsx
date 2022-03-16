

import React from 'react'

import styles from './Layout.module.css'

const Layout = (props: { children: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined }) => {

    return <div className={styles.container}>
        {props.children}
    </div>
}

export default Layout;