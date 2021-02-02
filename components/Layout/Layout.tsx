import Link from 'next/link';
import Head from 'next/head';
import {useEffect, useRef} from 'react';

import {GetStaticProps, GetServerSideProps} from 'next';

import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Banner from '../Banner/Banner';

import {GA_TRACKING_ID} from '../../util/gtag';

import {ContentfullAsset, LayoutProps} from '../../interfaces/Contentfull';

import {fetchAsset, fetchEntry} from '../../libs/api';

import styles from './Layout.module.css';

export default function Layout({
    children,
    image,
    logo_522x230,
    logo_159x70,
}: LayoutProps) {
    const ref = useRef(null);
    useEffect(() => {
        const layoutContainer = ref.current! as HTMLDivElement;
        if (
            layoutContainer.clientHeight < window.innerHeight &&
            /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                navigator.userAgent
            ) &&
            !children.props.className.includes('Portfolio')
        ) {
            layoutContainer.style.height = window.innerHeight - 200 + 'px';
        } else {
            layoutContainer.style.height = 'unset';
        }
    }, [children]);

    const title = 'Jasmimdesign';
    return (
        <>
            <Head>
                <title>{title}</title>
                <link rel="icon" href="/jasmim-favicon.png" />
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
                <link
                    href="https://fonts.googleapis.com/css?family=Dawning+of+a+New+Day|Numans&display=swap"
                    rel="stylesheet"
                />
                {/* Pinterest */}
                <meta
                    name="p:domain_verify"
                    content="d66fb6e2823ccfc6f578fb18a1f6341d"
                />
                {process.env.NODE_ENV === 'production' ? (
                    // Global Site Tag (gtag.js) - Google Analytics
                    <>
                        <script
                            async
                            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
                        />
                        <script
                            dangerouslySetInnerHTML={{
                                __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${GA_TRACKING_ID}', {
                        page_path: window.location.pathname,
                    });
                    `,
                            }}
                        />
                    </>
                ) : null}
            </Head>
            <header>
                <Navbar image={image} logo_159x70={logo_159x70} />
                <Banner image={image} logo_522x230={logo_522x230} />
            </header>
            <div
                id="layout-container"
                ref={ref}
                className={styles.layoutContainer}>
                {children}
            </div>
            <Footer />
        </>
    );
}

const getLogos = () => {
    // (async () => {
    //     let content = (await fetchEntry('5afhTCYqzTm2nJdZuOWMKh')) as {};
    //     console.log(content);
    // })();
    // const logo_522x230 = (await fetchAsset(
    //     'g4yjeOZJUv67QmnbD39Mw'
    // )) as ContentfullAsset;
    // const logo_159x70 = (await fetchAsset(
    //     'g4yjeOZJUv67QmnbD39Mw'
    // )) as ContentfullAsset;
};

// export const getStaticProps: GetStaticProps = async () => {
//     let image = (await fetchAsset('g4yjeOZJUv67QmnbD39Mw')) as ContentfullAsset;
//     // let content = (await fetchEntry('3p0FQbL4yYnRwnHegblsPC')) as {};
//     console.log(image);

//     // return {props: {image: image}};
//     return {props: {dummy: null}};
// };
