


import React, { useEffect, useState } from 'react'

import Modal from '../Modal/Modal'
import { AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlineClose } from "react-icons/ai"

import styles from './ContainerGallery.module.css'

import Image from './Image'

const ContainerGallery = (props: any) => {

    let arr = [...props.allImages]

    const [state, setState] = useState<any>({
        path: props.imagePathLink,
        num: arr.indexOf(props.imagePathLink),
    })

    useEffect(() => {
        setState((prevState: any) => {
            return { ...prevState, path: arr[state.num] }
        })

        // console.log('From UseEffect', arr[state.num])
    }, [state.num])


    const handleLeftClick = () => {
        state.num--

        if (arr[state.num] === undefined) {
            setState((prevState: any) => {
                return { ...prevState, num: arr.length - 1 }
            })
        }
        setState((prevState: any) => {
            return { ...prevState, path: arr[state.num] }
        })
    }

    const handleRightClick = () => {
        state.num++

        if (arr[state.num] === undefined) {
            setState((prevState: any) => {
                return { ...prevState, num: 0 }
            })
        }
        setState((prevState: any) => {
            return { ...prevState, path: arr[state.num] }
        })
    }

    return <Modal handleClose={props.handleClose}>
        <div>            
            <Image className={` ${styles.fade}`} path={state.path} index={state.num}/>

            <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'space-between' }}>
                <span className={`${styles.leftArrow} `} onClick={handleLeftClick}><AiOutlineArrowLeft /></span>
                <span className={styles.rightArrow} onClick={handleRightClick}><AiOutlineArrowRight /></span>
            </div>
        </div>
    </Modal>
}

export default ContainerGallery
