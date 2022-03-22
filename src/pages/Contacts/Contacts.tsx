import React, { useState } from 'react'

import Layout from '../Layout/Layout'

import styles from './Contacts.module.css'

import { FaPhoneAlt, FaEnvelope, FaFacebook, FaInstagramSquare } from "react-icons/fa"
import ContactSmall from '../GalleryPage/ContainerGallery/ContainerContactCall'


const Contacts = () => {

  type type = {
    open: Boolean,
  }

  const [state, setState] = useState<type>({
    open: false,
  })

  const handleChange = () => {

  }

  const handleOpen = () => {
    setState((prevState) => {
      return { ...prevState, open: true }
    })
  }

  const handleClose = () => {
    setState((prevState) => {
      return { ...prevState, open: false }
    })
  }

  return <Layout>

    {state.open && <ContactSmall handleClose={handleClose} />}

    <div className={styles.reserve}>
      <h1 className={styles.textWrapper}>Свържете се с мен</h1>
    </div>

    <div className={styles.mainContainer}>

      <div className={styles.call}>
        <span className={styles.textContact}> КОНТАКТИ </span>
        <p></p>
        <span className={styles.textCall}><FaPhoneAlt style={{ color: 'var(--secondary-color)', fontSize: '1rem', marginRight: '5px' }} />
          +359 <span style={{ color: 'rgb(98 87 48)' }}>(888)</span> 888888
        </span>
        <span className={styles.textCall}><FaEnvelope style={{ color: 'var(--secondary-color)', fontSize: '1rem', marginRight: '5px' }} /> zojko@childish.eu </span>
        <p></p>
        <span style={{ color: 'var(--secondary-color)', fontSize: '1.5rem', marginRight: '5px' }}> <FaFacebook /> <FaInstagramSquare /> </span>
        <button className={styles.buttonCall} onClick={handleOpen}>Заявете обаждане</button>
      </div>

      <div className={styles.containerIn}>
        <div >

          <div className={styles.inputWrapper}>
            <input type='text'
              id="user"
              placeholder='Вашето име'
              name={'Test'}
              // value={''}
              onChange={handleChange}
            />
            <label htmlFor="user" className="fa fa-user " style={{ color: 'var(--secondary-color)', position: 'absolute', left: '20px', top: 'calc(50% - 0.5em)' }} ></label>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>

            <div className={styles.inputWrapper}>
              <input type='text'
                id="phone"
                style={{ width: '98%', marginRight: '5px' }}
                placeholder='Вашият телефон'
                name={'Test'}
                // value={''}
                onChange={handleChange}
              />
              <label htmlFor="phone" className="fa fa-phone  " style={{ color: 'var(--secondary-color)', position: 'absolute', left: '20px', top: 'calc(50% - 0.5em)' }} ></label>
            </div>

            <div className={styles.inputWrapper}>
              <input type='text'
                id="email"
                style={{ maxWidth: '98%', marginLeft: '5px' }}
                placeholder='Вашият и-мейл'
                name={'Test'}
                // value={''}
                onChange={handleChange}
              /> <label htmlFor="email" className="fa fa-envelope  " style={{ color: 'var(--secondary-color)', position: 'absolute', left: '20px', top: 'calc(50% - 0.5em)' }} ></label>
            </div>
          </div>

          <div className={styles.inputWrapper}>
            <textarea
              id="text"
              placeholder='Вашето съобщение'
              name={'Test'}
              rows={8}
              // value={''}
              onChange={handleChange}
            />
            <label htmlFor="text" className="fa fa-pencil  " style={{ color: 'var(--secondary-color)', position: 'absolute', left: '20px', top: 'calc(12% - 0.5em)' }} ></label>
          </div>

          <button className={styles.buttonSend}>Изпращане</button>
        </div>
      </div>
    </div >
    <div className={styles.reserve}>
      <h1 className={styles.textWrapper}>
        <div>Заявка за шоу</div>
        +359 888888888
      </h1>
    </div>
    <div>
      <p></p>
      <p></p>
      <p></p>
      <h2 className={styles.textWrapper}> </h2>
    </div>
  </Layout >
}

export default Contacts