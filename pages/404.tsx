import { GetStaticProps } from 'next';

import Layout from '../componenets/Layout/Layout';

import { ContentfullAsset } from '../interfaces/Contentfull';

import { fetchEntry, fetchAsset } from '../libs/api';

import styles from '../styles/404.module.css';

interface Props {
  image: ContentfullAsset;
}

export default function Custom404({ image }: Props) {
  return (
    <>
      <Layout image={image}>
        <div className={styles.custom404}>
          <p>Lamentamos, mas está página não existe 🙁</p>
        </div>
      </Layout>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  let image = (await fetchAsset('g4yjeOZJUv67QmnbD39Mw')) as ContentfullAsset;
  let content = await fetchEntry('7p3vZDcjHQY2RY0Gujyw23');
  // custom mensagem de erro

  return { props: { image: image, content } };
};
