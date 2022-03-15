


import React, { useEffect, useState } from 'react'

import Modal from '../Modal/Modal'
import { AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlineClose } from "react-icons/ai"

import styles from './ContainerGallery.module.css'

const ContainerGallery = (props: any) => {

    useEffect(() => {
        setState((prevState: any) => {
            return { ...prevState, path: props.imagePathLink }
        })
        setState((prevState: any) => {
            return { ...prevState, num: arr.indexOf(props.imagePathLink) }
        })
    }, [])

    const [state, setState] = useState<any>({
        path: '',
        num: 0,
    })
    let arr = [...props.allImages]

    const handleLeftClick = () => {
        state.num--
        if (state.num <= 0) {
            setState((prevState: any) => {
                return { ...prevState, num: arr.length }
            })
        }
        setState((prevState: any) => {
            return { ...prevState, path: arr[state.num] }
        })
        console.log(state.path)
        console.log(state.num)
    }
    const handleRightClick = () => {
        state.num++
        if (state.num >= arr.length - 1) {
            setState((prevState: any) => {
                return { ...prevState, num: -1 }
            })
        }
        setState((prevState: any) => {
            return { ...prevState, path: arr[state.num] }
        })
        console.log(state.path)
        console.log(state.num)
    }
    return <Modal handleClose={props.handleClose}>
        <div>
            <span className={styles.close} onClick={props.handleClose} > <AiOutlineClose /></span>
            <img className={styles.img} key={props.imagePathLink}
                // @ts-ignore
                onClick={() => handleOpen(image)}
                // @ts-ignore
                src={state.path} alt=''
            />
            <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'space-between' }}>
                <span className={styles.leftArrow} onClick={handleLeftClick}><AiOutlineArrowLeft /></span>
                <span className={styles.rightArrow} onClick={handleRightClick}><AiOutlineArrowRight /></span>
            </div>
        </div>
    </Modal>
}

export default ContainerGallery
