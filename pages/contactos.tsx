import { GetStaticProps } from 'next';
import Uikit from 'uikit';
import { fechtEntry, fechtAsset } from '../libs/api';

import {
  ContentfullAsset,
  ContentfullContactos
} from '../interfaces/Contentfull';

import Layout from '../componenets/Layout/Layout';
import Input from '../componenets/Input/Input';

import styles from '../styles/Contactos.module.css';

export default function Contactos({
  image,
  heading,
  images,
  slug,
  subHeading
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
  return (
    <>
      <Layout image={image}>
        <div className={styles.container}>
          <div className={styles.imageContainer} uk-lightbox='animation: slide'>
            {images.map((image, index) => (
              <div key={index}>
                <a href={image.fields.file.url} data-caption='Caption 1'>
                  <img src={image.fields.file.url} />
                </a>
              </div>
            ))}
          </div>
          <div className={styles.formContainer}>
            <span className={styles.heading}>{heading}</span>
            <span className={styles.subHeading}>{subHeading}</span>
            <div className={styles.formGroup}>
              <Input id='email' label='Email' />
              <Input id='telemovel' label='Telemóvel' />
              <Input id='mensagem' label='Mensagem' type='textarea' />
              <div className={styles.consentimentoContainer}>
                <input
                  className={styles.check_consentimento}
                  type='checkbox'
                  name='consentimento'
                  id='consentimento'
                />
                <label
                  className={styles.check_consentimento_style}
                  htmlFor='consentimento'></label>
                <span className={styles.span_consentimento}>
                  Aceito fornecer os meus contactos para futuro contacto.
                </span>
              </div>
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
