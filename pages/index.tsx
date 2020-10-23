import { GetStaticProps } from 'next';

import Layout from '../componenets/Layout/Layout';

import { ContentfullAsset } from '../interfaces/Contentfull';

import { fechtEntry, fechtAsset } from '../libs/api';

interface Props {
  image: ContentfullAsset;
}

import style from '../styles/Home.module.css';

export default function Home({ image }: Props) {
  return (
    <>
      <Layout image={image}>
        <div className={style.content}>
          <h1>Em desenvolvimento!</h1>
          <h2>Teremos novidades em breve!</h2>
        </div>
      </Layout>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  let image = (await fechtAsset('g4yjeOZJUv67QmnbD39Mw')) as ContentfullAsset;
  let content = await fechtEntry('7p3vZDcjHQY2RY0Gujyw23');

  return { props: { image: image, content } };
};
