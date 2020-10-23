import React, { useState, useRef } from 'react';
import axios from 'axios';

import { GetStaticProps } from 'next';
import { fechtEntry, fechtAsset } from '../libs/api';

import { ContentfullAsset, ContentfullContactos } from '../interfaces/Contentfull';

import Layout from '../componenets/Layout/Layout';
import Input from '../componenets/Input/Input';

import styles from '../styles/Contactos.module.css';

export default function Contactos({
  image,
  heading,
  images,
  slug,
  subHeading,
  button,
  labelMarketing,
  labelContacto
}: ContentfullContactos) {
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
  const inputName = useRef<HTMLInputElement>(null);
  const inputEmail = useRef<HTMLInputElement>(null);
  const inputTelemovel = useRef<HTMLInputElement>(null);
  const inputMensagem = useRef<HTMLTextAreaElement>(null);
  const inputMarketing = useRef<HTMLInputElement>(null);
  const btnSubmit = useRef<HTMLButtonElement>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [telemovel, setTelemovel] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [Email_Opt_Out, setEmail_Opt_Out] = useState(false);

  const inputHanlder = (id: string, e: React.ChangeEvent<HTMLInputElement>) => {
    // if (id === 'name') setName(e.target.value);
    // if (id === 'telemovel') setTelemovel(e.target.value);
    // if (id === 'mensagem') setMensagem(e.target.value);
    // if (id === 'marketing' && e.target.value === 'on') setEmail_Opt_Out(false);
    // else if (id === 'marketing') setEmail_Opt_Out(true);
    // else
    e.target.classList.remove('invalide');
  };

  const blurHandler = (id: string, e: React.ChangeEvent<HTMLInputElement>) => {
    if (
      (id === 'email' && (ValidateEmail(e.target.value) || e.target.value === '')) ||
      id === 'telemovel' ||
      id === 'name'
    ) {
      e.target.classList.remove('invalide');
    } else if (id === 'email' && !ValidateEmail(e.target.value)) {
      e.target.classList.add('invalide');
    }
  };

  const submitHandler = async () => {
    try {
      // fazer blink aos invalids caso hajam
      if (inputName.current!.value && (inputEmail.current!.value || inputTelemovel.current!.value))
        try {
          inputName.current!.disabled = true;
          inputEmail.current!.disabled = true;
          inputTelemovel.current!.disabled = true;
          inputMensagem.current!.disabled = true;
          inputMarketing.current!.disabled = true;
          console.log(inputMarketing.current!.checked);
          
          await axios('/api/insert', {
            method: 'POST',
            data: {
              Lead_Source: 'Site',
              Last_Name: inputName.current!.value,
              Email: inputEmail.current!.value,
              Mobile: inputTelemovel.current!.value,
              Description: inputMensagem.current!.value,
              Email_Opt_Out: inputMarketing.current!.checked 
            }
          });
          location.href = '/obrigado';
        } catch (error) {
          console.log(error);
          inputName.current!.disabled = false;
          inputEmail.current!.disabled = false;
          inputTelemovel.current!.disabled = false;
          inputMensagem.current!.disabled = false;
          inputMarketing.current!.checked = false;
        }
      else {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
          window.scroll({
            top: document.getElementById('name')!.getBoundingClientRect().top + window.scrollY - 150,
            behavior: 'smooth'
          });
        }
        inputName.current?.classList.add('invalide');
        inputEmail.current?.classList.add('invalide');
      }
    } catch (error) {
      console.log(error);
    }
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
              <Input
                id="name"
                label="Nome"
                type="text"
                onChange={inputHanlder}
                useRef={inputName}
                onBlur={blurHandler}
              />
              <Input
                id="email"
                label="Email"
                type="email"
                onChange={inputHanlder}
                useRef={inputEmail}
                onBlur={blurHandler}
              />
              <Input
                id="telemovel"
                label="Telemóvel"
                type="number"
                onChange={inputHanlder}
                useRef={inputTelemovel}
                onBlur={blurHandler}
              />
              <Input id="mensagem" label="Mensagem" type="textarea" onChange={inputHanlder} useRef={inputMensagem} />
              {/* <div className={styles.consentimentoContainer}>
                <input className={styles.check_consentimento} type="checkbox" name="consentimento" id="consentimento" />
                <label className={styles.check_consentimento_style} htmlFor="consentimento"></label>
                <span className={styles.span_consentimento}>{labelContacto}</span>
              </div> */}
              <div className={styles.consentimentoContainer}>
                <input
                  className={styles.check_consentimento}
                  type="checkbox"
                  name="marketing"
                  id="marketing"
                  ref={inputMarketing}
                  onChange={(e) => inputHanlder('marketing', e)}
                />
                <label className={styles.check_consentimento_style} htmlFor="marketing"></label>
                <span className={styles.span_consentimento}>{labelMarketing}</span>
              </div>
              <button className={styles.btn} ref={btnSubmit} onClick={submitHandler}>
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
