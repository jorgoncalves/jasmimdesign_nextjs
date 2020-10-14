import { GetStaticProps } from 'next';
import { fechtEntry, fechtAsset } from '../libs/api';

import { ContentfullAsset } from '../interfaces/Contentfull';

import Layout from '../componenets/Layout/Layout';

interface Props {
  image: ContentfullAsset;
}

export default function Contactos({ image }: Props) {
  return (
    <>
      <Layout image={image}> </Layout>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  let image = (await fechtAsset('g4yjeOZJUv67QmnbD39Mw')) as ContentfullAsset;
  let content = await fechtEntry('7p3vZDcjHQY2RY0Gujyw23');

  return { props: { image: image, content } };
};
