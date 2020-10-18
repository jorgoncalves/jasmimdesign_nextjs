import React, { useState, useRef } from 'react';

import { GetStaticProps } from 'next';
import { fechtEntry, fechtAsset } from '../libs/api';

import { ContentfullAsset, ContentfullContactos } from '../interfaces/Contentfull';

import Layout from '../componenets/Layout/Layout';
import Input from '../componenets/Input/Input';

import styles from '../styles/Contactos.module.css';

export default function Contactos({ image, heading, images, slug, subHeading, button }: ContentfullContactos) {
  const contacts = [
    {
      label: 'Email',
      value: 'jasmimdesign@gmail.com',
      shown: 'jasmimdesign@gmail.com'
    },
    {
      label: 'Facebook',
      value: 'https://facebook.com/jasmimdesign/',
      shown: 'facebook.com/jasmimdesign/'
    },
    {
      label: 'Instagram',
      value: 'https://www.instagram.com/jasmimdesign/',
      shown: 'instagram.com/jasmimdesign/'
    }
  ];
  const inputEmail = useRef<HTMLInputElement>(null);
  const inputTelemovel = useRef<HTMLInputElement>(null);
  const inputMensagem = useRef<HTMLTextAreaElement>(null);
  const [email, setEmail] = useState('');
  const [telemovel, setTelemovel] = useState('');
  const [mensagem, setMensagem] = useState('');

  const inputHanlder = (id: string, e: React.ChangeEvent<HTMLInputElement>) => {
    if (id === 'email' && (ValidateEmail(e.target.value) || e.target.value === '')) {
      e.target.classList.remove('invalide');
    } else if (id === 'email' && !ValidateEmail(e.target.value)) {
      e.target.classList.add('invalide');
    }
  };

  const submitHandler = () => {
    console.log(inputEmail.current?.value);
    console.log(inputTelemovel.current?.value);
    console.log(inputMensagem.current?.value);
  };
  function ValidateEmail(email: string) {
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return true;
    }
    return false;
  }
  return (
    <>
      <Layout image={image}>
        <div className={styles.container}>
          <div className={styles.imageContainer} uk-lightbox="animation: slide">
            {images.map((image, index) => (
              <div key={index}>
                <a href={image.fields.file.url} data-caption={image.fields.description}>
                  <img src={image.fields.file.url} />
                </a>
              </div>
            ))}
          </div>
          <div className={styles.formContainer}>
            <span className={styles.heading}>{heading}</span>
            <span className={styles.subHeading}>{subHeading}</span>
            <div className={styles.formGroup}>
              <Input id="email" label="Email" type="email" onChange={inputHanlder} useRef={inputEmail} />
              <Input id="telemovel" label="Telemóvel" type="number" onChange={inputHanlder} useRef={inputTelemovel} />
              <Input id="mensagem" label="Mensagem" type="textarea" onChange={inputHanlder} useRef={inputMensagem} />
              <div className={styles.consentimentoContainer}>
                <input className={styles.check_consentimento} type="checkbox" name="consentimento" id="consentimento" />
                <label className={styles.check_consentimento_style} htmlFor="consentimento"></label>
                <span className={styles.span_consentimento}>
                  Aceito fornecer os meus contactos para futuro contacto.
                </span>
              </div>
              <div className={styles.consentimentoContainer}>
                <input className={styles.check_consentimento} type="checkbox" name="marketing" id="marketing" />
                <label className={styles.check_consentimento_style} htmlFor="marketing"></label>
                <span className={styles.span_consentimento}>
                  Aceito fornecer os meus contactos para efeitos de email marketing.
                </span>
              </div>
              <button className={styles.btn} onClick={submitHandler}>
                {button}
              </button>
            </div>
            {contacts.map((contact, index) => {
              return (
                <div className={styles.contactsGroup} key={index}>
                  <span className={styles.contactsLabel}>{contact.label}</span>
                  <a className={styles.contactsAnchor} href={contact.value}>
                    {contact.shown}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </Layout>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  let image = (await fechtAsset('g4yjeOZJUv67QmnbD39Mw')) as ContentfullAsset;
  let content = (await fechtEntry('3p0FQbL4yYnRwnHegblsPC')) as {};
  console.log(content);

  return { props: { image: image, ...content } };
};
