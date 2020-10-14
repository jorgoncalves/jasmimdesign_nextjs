import type { AppProps /*, AppContext */ } from 'next/app';
import { motion } from 'framer-motion';

import '@fortawesome/fontawesome-free/js/all.js';

import '../styles/globals.css';

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <motion.div
      key={router.route}
      initial='pageInitial'
      animate='pageAnimate'
      variants={{
        pageInitial: {
          opacity: 0
        },
        pageAnimate: {
          opacity: 1
        }
      }}>
      <Component {...pageProps} />
    </motion.div>
  );
}

export default MyApp;
