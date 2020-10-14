import Link from 'next/link';

import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar_container}>
      <ul>
        <li>
          <Link href='/'>
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link href='/sobre-nos'>
            <span>Sobre nós</span>
          </Link>
        </li>
        <li>
          <Link href='/contactos'>
            <span>Contactos</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
