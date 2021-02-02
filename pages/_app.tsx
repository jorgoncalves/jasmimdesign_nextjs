import type {AppProps /*, AppContext */} from 'next/app';
import {motion} from 'framer-motion';

import * as gtag from '../util/gtag';
import UIkit from '../util/Uikit';

import Layout from '../components/Layout/Layout';

import '@fortawesome/fontawesome-free/js/all.js';

import 'uikit/dist/css/uikit.min.css';

import '../styles/globals.css';
import '../styles/uikit-custom.css';
import {useEffect} from 'react';

function MyApp({Component, pageProps, router}: AppProps) {
    useEffect(() => {
        const handleRouteChange = (url: URL) => {
            if (process.env.NODE_ENV === 'production') gtag.pageview(url);
        };
        router.events.on('routeChangeComplete', handleRouteChange);

        return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
        };
    }, [router.events]);
    return (
        <>
            <motion.div
                key={router.route}
                initial="pageInitial"
                animate="pageAnimate"
                variants={{
                    pageInitial: {
                        opacity: 0,
                    },
                    pageAnimate: {
                        opacity: 1,
                    },
                }}>
                <UIkit>
                    <Component {...pageProps} />
                </UIkit>
            </motion.div>
        </>
    );
}

export default MyApp;
