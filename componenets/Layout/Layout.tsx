import Link from 'next/link';
import Head from 'next/head';

import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Banner from '../Banner/Banner';

import { ContentfullAsset } from '../../interfaces/Contentfull';

import styles from './Layout.module.css';

interface Props {
  children: any;
  image: ContentfullAsset;
}

export default function Layout({ children, image }: Props) {
  const title = 'Jasmimdesign';
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/jasmim-favicon.png" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          href="https://fonts.googleapis.com/css?family=Dawning+of+a+New+Day|Numans&display=swap"
          rel="stylesheet"
        />
      </Head>
      <header>
        <Banner {...image} />
        <Navbar {...image}/>
      </header>
      <div id="layout-container" className={styles.layoutContainer}>{children}</div>
      <Footer />
    </>
  );
}
