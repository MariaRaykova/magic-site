import React, {
  Fragment, MouseEventHandler, ReactChild, ReactFragment, ReactPortal,
} from 'react'
import ReactDOM from 'react-dom'
import { AiOutlineClose } from 'react-icons/ai'
import styles from './Modal.module.css'

const Backdrop = (props: { handleClose: MouseEventHandler<HTMLDivElement> | undefined }) => {
  return (
    <div className={styles.backdrop} onClick={props.handleClose}>
      <span className={styles.close} onClick={props.handleClose}>
        {' '}
        <AiOutlineClose />
      </span>
    </div>
  )
}

const  ModalOverlay = (props: { children: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{props.children}</div>
    </div>
  )
}
const portalElement: any = document.getElementById('overlays')

const Modal = (props: { handleClose: MouseEventHandler<HTMLDivElement> | undefined; children: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined }) => {
  return (
    <>

      {ReactDOM.createPortal(<Backdrop handleClose={props.handleClose} />, portalElement)}
      {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
    </>
  )
}

export default Modal
