import Link from 'next/link';
import Head from 'next/head';

import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Banner from '../Banner/Banner';

import { GA_TRACKING_ID } from '../../util/gtag';

import { ContentfullAsset } from '../../interfaces/Contentfull';

import styles from './Layout.module.css';
import { useEffect, useRef } from 'react';

interface Props {
    children: any;
    image: ContentfullAsset;
}

export default function Layout({ children, image }: Props) {
    const ref = useRef(null);
    useEffect(() => {
        const layoutContainer = ref.current! as HTMLDivElement;
        if (
            layoutContainer.clientHeight < window.innerHeight &&
            /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                navigator.userAgent
            )
        ) {
            layoutContainer.style.height = window.innerHeight - 200 + 'px';
        }
        // const obrigadoContainer = document.getElementById('obrigado-container') as HTMLDivElement;
        // console.log(obrigadoContainer);

        // obrigadoContainer.style.height = window.innerHeight.toString();
    }, []);

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
                    `
                            }}
                        />
                    </>
                ) : null}
            </Head>
            <header>
                <Banner {...image} />
                <Navbar {...image} />
            </header>
            <div
                id="layout-container"
                ref={ref}
                className={styles.layoutContainer}
            >
                {children}
            </div>
            <Footer />
        </>
    );
}
