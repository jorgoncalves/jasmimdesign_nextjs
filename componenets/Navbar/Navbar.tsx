import Link from 'next/link';
import BannerSidenav from '../Banner/BannerSidenav';
import {useRouter} from 'next/router';

import {ContentfullAsset} from '../../interfaces/Contentfull';

import styles from './Navbar.module.css';

interface Pages {
    label: string;
    link: string;
}

export default function Navbar({title, file}: ContentfullAsset) {
    const pages: Pages[] = [
        // { label: 'Home', link: '/' },
        {label: 'Portfólio', link: '/portfolio'},
        {label: 'Sobre nós', link: '/sobre-nos'},
        // { label: 'Contactos', link: '/contactos' }
        {label: 'Contactos', link: '/'},
    ];
    const router = useRouter();
    return (
        <>
            <header className={true ? styles.nav_header_container : ''}>
                <nav className={styles.nav_custom + ' uk-navbar'}>
                    <div className="">
                        <ul
                            className={
                                styles.nav_border +
                                ' uk-navbar-nav uk-visible@s'
                            }>
                            {pages.map((page, index) => {
                                // const locationStyle = {
                                //   fontWeight: router.pathname === page.link ? 600 : 400
                                // };
                                return (
                                    <li key={index}>
                                        <Link href={page.link}>
                                            <span
                                                className={styles.navbar_link}
                                                // style={locationStyle}
                                            >
                                                {page.label}
                                            </span>
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                        <div
                            className={
                                styles.navbar_mobile +
                                ' uk-hidden@s uk-flex uk-flex-center uk-width-1-1'
                            }>
                            <BannerSidenav {...{title, file}} />
                            <a
                                href="#"
                                className={
                                    styles.hamburger +
                                    ' uk-navbar-toggle uk-hidden@s'
                                }
                                uk-navbar-toggle-icon="true"
                                onClick={sidenavShowHandler}></a>
                        </div>
                    </div>
                </nav>
            </header>

            <div id="sidenav" className={styles.sidenav}>
                <div
                    className={
                        styles.offcanvas_custom + ' uk-flex uk-flex-column'
                    }>
                    <button
                        className="uk-offcanvas-close"
                        type="button"
                        uk-close="true"
                        onClick={sidenavHideHandler}></button>
                    <ul className="uk-nav uk-nav-primary uk-nav-center uk-margin-auto-vertical">
                        {pages.map((page, index) => (
                            <li key={index} className="uk-margin">
                                <Link href={page.link}>
                                    <span className={styles.navbar_link}>
                                        {page.label}
                                    </span>
                                </Link>
                                {pages.length - 1 > index ? (
                                    <div
                                        className={
                                            styles.divider +
                                            ' uk-nav-divider uk-margin'
                                        }></div>
                                ) : null}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}

const sidenavShowHandler = () => {
    const layoutContainer = document.getElementById(
        'layout-container'
    ) as HTMLDivElement;
    layoutContainer.style.display = 'none';
    const footerContainer = document.getElementById(
        'footer-container'
    ) as HTMLDivElement;
    footerContainer.style.visibility = 'hidden';
    const sidenav = document.getElementById('sidenav') as HTMLDivElement;
    sidenav.style.display = 'block';
    sidenav.style.animationName = 'fadeIn';
};

const sidenavHideHandler = () => {
    const layoutContainer = document.getElementById(
        'layout-container'
    ) as HTMLDivElement;
    layoutContainer.style.display = 'flex';
    const footerContainer = document.getElementById(
        'footer-container'
    ) as HTMLDivElement;
    footerContainer.style.visibility = 'visible';
    const sidenav = document.getElementById('sidenav') as HTMLDivElement;
    sidenav.style.animationName = 'fadeOut';
    setTimeout(() => {
        sidenav.style.display = 'none';
    }, 500);
};
