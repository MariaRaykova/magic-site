import React, { useState, useRef, LegacyRef, FormEvent } from 'react'

import {
  FaPhoneAlt, FaEnvelope, FaFacebook, FaInstagramSquare,
} from 'react-icons/fa'
import emailjs from '@emailjs/browser'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import styles from './Contacts.module.css'

import ContainerContactCall from '../GalleryPage/ContainerGallery/ContainerContactCall'

import { useTranslation } from 'react-i18next'

const Contacts = () => {
  const { t } = useTranslation()

  type type = {
    open: boolean,
  }

  const [state, setState] = useState<type>({
    open: false,
  })

  const form = useRef();
  const notify = (text: string) => toast.error(text, { theme: 'dark' });
  
  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const filter = /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!form.current?.['user']['value']) {
      notify(t('errors.name'));
    }
    if (!form.current?.['email']['value']) {
      notify(t('errors.email'));
    } else if (!filter.test(form.current?.['email']['value'])) {
      notify(t('errors.emailFormat'));
    }
    if (!form.current?.['message']['value']) {
      notify(t('errors.message'));
    }
    console.log('Data: ', form.current?.['user']['value']);
    emailjs.sendForm('service_2l7snde', 'template_h3wplnu', form.current as unknown as string, 'cCxiMnLFLkMAR0XLJ')
      .then((result) => {
        console.log(result);
      }, (error) => {
        console.log(error.text);
        notify(t('errors.error'));
      });
  };

  const handleOpen = () => {
    setState((prevState) => ({ ...prevState, open: true }))
  }

  const handleClose: any = () => {
    setState((prevState) => ({ ...prevState, open: false }))
  }

  return (
    <>
      <ToastContainer />
      {state.open && <ContainerContactCall handleClose={handleClose} />}

      <div className={styles.reserve}>
        <h1 className={styles.textWrapper}>{t('contacts.title')}</h1>
      </div>

      <div className={styles.mainContainer}>

        <div className={styles.call}>
          <span className={styles.textContact}>{t('contacts.text')}</span>
          <p />
          <span className={styles.textCall}>
            <FaPhoneAlt style={{ color: 'var(--secondary-color)', fontSize: '1rem', marginRight: '5px' }} />
            +359
            {' '}
            <span style={{ color: 'rgb(98 87 48)' }}>(877)</span>
            {' '}
            265897
          </span>
          <span className={styles.textCall}>
            <FaEnvelope style={{ color: 'var(--secondary-color)', fontSize: '1rem', marginRight: '5px' }} />
            {' '}
            {t('email')}
            {' '}
          </span>
          <p />
          <span style={{ color: 'var(--secondary-color)', fontSize: '1.5rem', marginRight: '5px' }}>
            {' '}
            <a href="https://www.facebook.com/Zoyko.Magic" target="_blank" rel="noreferrer noopener">
              <FaFacebook color='rgb(238, 209, 137)' />
            </a>
            {' '}
            <a href="https://www.instagram.com/zoyche.to" target="_blank" rel="noreferrer noopener">
              <FaInstagramSquare color='rgb(238, 209, 137)' />
            </a>
            {' '}
          </span>
          <button className={styles.buttonCall} onClick={handleOpen}>{t('contacts.call')}</button>
        </div>

        
        <form id="inquiry_form" className={styles.inquiry_form} ref={form as unknown as LegacyRef<HTMLFormElement> | undefined} onSubmit={sendEmail}>
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

              <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                <div className={styles.inputWrapper}>
                  <input
                    type="text"
                    id="email"
                    style={{ maxWidth: '98%', marginLeft: '5px' }}
                    placeholder={t('contacts.yourEmail')}
                    name="email"
                  />
                  {' '}
                  <label
                    htmlFor="email"
                    className="fa fa-envelope  "
                    style={{
                      color: 'var(--secondary-color)', position: 'absolute', left: '20px', top: 'calc(50% - 0.5em)',
                    }}
                  />
                </div>
              </div>

              <div className={styles.inputWrapper}>
                <textarea
                  id="text"
                  placeholder={t('contacts.yourMessage')}
                  name="message"
                  rows={8}
                />
                <label
                  htmlFor="text"
                  className="fa fa-pencil  "
                  style={{
                    color: 'var(--secondary-color)', position: 'absolute', left: '20px', top: 'calc(12% - 0.5em)',
                  }}
                />
              </div>

              <input type="submit" value={t('contacts.send') as string} />
            </div>
          </div>
        </form>
      </div>

      <div className={styles.reserve}>
        <h1 className={styles.textWrapper}>
          <div>{t('contacts.request')}</div>
          +359 877 265 897
        </h1>
      </div>
      <div>
        <p />
        <p />
        <p />
        <h2 className={styles.textWrapper}> </h2>
      </div>
    </>
  )
}

export default Contacts
