import Link from 'next/link';
import BannerSidenav from '../Banner/BannerSidenav';

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
        <nav className=" uk-navbar uk-width-1-1">
          <div className="uk-navbar-center uk-flex uk-flex-center uk-width-1-1">
            <ul className="uk-navbar-nav uk-visible@s">
              {pages.map((page, index) => (
                <li key={index}>
                  <Link href={page.link}>
                    <span className={styles.navbar_link}>{page.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <div className={styles.navbar_mobile + ' uk-hidden@s uk-flex uk-flex-between uk-width-1-1'}>
              <BannerSidenav {...{ title, file }} />
              <a
                href="#"
                className="uk-navbar-toggle uk-hidden@s"
                uk-navbar-toggle-icon="true"
                onClick={sidenavShowHandler}
              ></a>
            </div>
          </div>
        </nav>
      </header>

      <div id="sidenav" className={styles.sidenav}>
        <div className={styles.offcanvas_custom + ' uk-flex uk-flex-column'}>
          <button className="uk-offcanvas-close" type="button" uk-close="true" onClick={sidenavHideHandler}></button>
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

const sidenavShowHandler = () => {
  const sidenav = document.getElementById('sidenav') as HTMLDivElement;
  sidenav.style.display = 'block';
  sidenav.style.animationName = 'fadeIn';
};

const sidenavHideHandler = () => {
  const sidenav = document.getElementById('sidenav') as HTMLDivElement;
  sidenav.style.animationName = 'fadeOut';
  setTimeout(() => {
    sidenav.style.display = 'none';
  }, 400);
};
