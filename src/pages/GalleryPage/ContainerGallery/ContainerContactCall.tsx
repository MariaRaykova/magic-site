import React from 'react'

import ModalContactCall from '../Modal/ModalContactCall'
import styles from './ContainerContactCall.module.css'

const ContactSmall = (props: { handleClose : undefined}) => {
  
  const handleChange = (event: { target: { value: unknown } }) => {
    console.log(event?.target.value)
  }

  return (
    <ModalContactCall handleClose={props.handleClose}>

      <div className={styles.containerIn}>
        <div>
          <div className={styles.inputWrapper}>
            <input
              type="text"
              id="user"
              placeholder="Вашето име"
              name="Test"
              // value={''}
              onChange={handleChange}
            />
            <label
              htmlFor="user"
              className="fa fa-user "
              style={{
                color: 'var(--secondary-color)', position: 'absolute', left: '20px', top: 'calc(50% - 0.5em)',
              }}
            />
          </div>

          <div className={styles.inputWrapper}>
            <input
              type="text"
              id="phone"
              placeholder="Вашият телефон"
              name="Test"
              // value={''}
              onChange={handleChange}
            />
            <label
              htmlFor="phone"
              className="fa fa-phone  "
              style={{
                color: 'var(--secondary-color)', position: 'absolute', left: '20px', top: 'calc(50% - 0.5em)',
              }}
            />
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-evenly', padding: '20px' }}>
            <button className={styles.buttonSend}>Изпращане</button>
          </div>
        </div>
      </div>

    </ModalContactCall>
  )
}

export default ContactSmall
