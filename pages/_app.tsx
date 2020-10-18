import type { AppProps /*, AppContext */ } from 'next/app';
import { motion } from 'framer-motion';

import UIkit from '../util/Uikit';

import '@fortawesome/fontawesome-free/js/all.js';

import 'uikit/dist/css/uikit.min.css';
// import 'uikit/dist/js/uikit-core';
// import 'uikit/dist/js/uikit-icons';

import '../styles/globals.css';
import '../styles/uikit-custom.css';

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <motion.div
        key={router.route}
        initial="pageInitial"
        animate="pageAnimate"
        variants={{
          pageInitial: {
            opacity: 0
          },
          pageAnimate: {
            opacity: 1
          }
        }}
      >
        <UIkit>
          <Component {...pageProps} />
        </UIkit>
      </motion.div>
    </>
  );
}

export default MyApp;
