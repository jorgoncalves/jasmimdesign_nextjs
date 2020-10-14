import styles from './Footer.module.css';

export default function Footer() {
  return (
    <div className={styles.footer_container}>
      <a href='mailto:jasmimdesign@gmail.com?subject=Pedido de orçamento'>
        <i className={styles.social_icon + ' far fa-envelope fa-2x'}></i>
      </a>
      <a target='_blank' href='https://www.facebook.com/Jasmimdesign/'>
        <i className={styles.social_icon + ' fab fa-facebook-square fa-2x'}></i>
      </a>
      <a target='_blank' href='https://www.instagram.com/jasmimdesign/'>
        <i className={styles.social_icon + ' fab fa-instagram fa-2x'}></i>
      </a>
    </div>
  );
}
