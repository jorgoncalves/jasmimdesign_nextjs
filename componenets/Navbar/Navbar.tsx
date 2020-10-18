import Link from 'next/link';
import Banner from '../Banner/Banner';

import { ContentfullAsset } from '../../interfaces/Contentfull';

import styles from './Navbar.module.css';

interface Pages {
  label: string;
  link: string;
}

export default function Navbar({ title, file }: ContentfullAsset) {
  const pages: Pages[] = [
    { label: 'Home', link: '/' },
    { label: 'Sobre nós', link: '/sobre-nos' },
    { label: 'Contactos', link: '/contactos' }
  ];
  return (
    <>
      {/* <nav className={styles.navbar_container}>
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
     </nav> */}
      <header>
        {/* Main Navbar  */}
        <nav className="uk-container uk-navbar">
          <div className="uk-navbar-center">
            <ul className="uk-navbar-nav uk-visible@s">
              {pages.map((page, index) => (
                <li key={index}>
                  <Link href={page.link}>
                    <span className={styles.navbar_link}>{page.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
            {/* <div className="uk-hidden@s"> */}
            <Banner {...{ title, file }} />
            {/* </div> */}
            <a
              href="#"
              className="uk-navbar-toggle uk-hidden@s"
              uk-navbar-toggle-icon="true"
              uk-toggle="target: #sidenav"
            ></a>
          </div>
        </nav>
      </header>

      <div id="sidenav" 
      uk-offcanvas="flip: true"
       className="uk-offcanvas">
        <div className="uk-offcanvas-bar uk-flex uk-flex-column">
          <button className="uk-offcanvas-close" type="button" uk-close="true"></button>
          <ul className="uk-nav uk-nav-primary uk-nav-center uk-margin-auto-vertical">
            {pages.map((page, index) => (
              <li key={index} className="uk-margin">
                <Link href={page.link}>
                  <span className={styles.navbar_link}>{page.label}</span>
                </Link>
                <div className={styles.divider + ' uk-nav-divider uk-margin'}></div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
