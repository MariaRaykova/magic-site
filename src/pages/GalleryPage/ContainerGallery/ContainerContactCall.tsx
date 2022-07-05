import React, { DetailedHTMLProps, FormEvent, FormHTMLAttributes, LegacyRef, useRef } from 'react'

import ModalContactCall from '../Modal/ModalContactCall'

import emailjs from '@emailjs/browser'

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import styles from './ContainerContactCall.module.css'
import { t } from 'i18next';

const ContactSmall = (props: { handleClose: undefined }) => {

  const form = useRef();
  const notify = (text: string) => toast.error(text, { theme: 'dark' });

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const filter = /^$|\d+$/;

    if (!form.current?.['user']['value']) {
      notify('Вашето име трябва да е попълнено!');
    }
    if (!form.current?.['message']['value']) {
      notify('Вашето телефонен номер трябва да е попълнен!');
    } else if (!filter.test(form.current?.['message']['value'])) {
      notify('Вашият телефонен номер трябва да е само от цифри!');
    }
    console.log('Data: ', form.current);
    emailjs.sendForm('service_2l7snde', 'template_h3wplnu', form.current as unknown as string, 'cCxiMnLFLkMAR0XLJ')
      .then((result) => {
        console.log(result);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <ModalContactCall handleClose={props.handleClose}>

      <form id="call_form" ref={form as unknown as LegacyRef<HTMLFormElement> | undefined} onSubmit={sendEmail} >
        <div className={styles.containerIn}>
          <div>
            <div className={styles.inputWrapper}>
              <input
                type="text"
                id="user"
                placeholder={t('contacts.yourName')}
                name="name"
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
                id="message"
                placeholder={t('contacts.phone')}
                name="phone"
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

              <input type="submit" value={t('contacts.send') as string} />
            </div>
          </div>
        </div>
      </form>

    </ModalContactCall>
  )
}

export default ContactSmall
