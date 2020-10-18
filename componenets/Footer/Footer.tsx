import styles from './Footer.module.css';

export default function Footer() {
  return (
    <div className={styles.footer_container}>
      <a uk-icon="icon: mail;ratio: 1.3;" href="mailto:jasmimdesign@gmail.com?subject=Pedido de orçamento"></a>
      <a uk-icon="icon: facebook;ratio: 1.3;" target="_blank" href="https://www.facebook.com/Jasmimdesign/"></a>
      <a uk-icon="icon: instagram;ratio: 1.3;" target="_blank" href="https://www.instagram.com/jasmimdesign/"></a>
    </div>
  );
}
