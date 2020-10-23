import React from 'react';
import Layout from '../componenets/Layout/Layout';

import { GetStaticProps } from 'next';
import { fechtEntry, fechtAsset } from '../libs/api';

import { ContentfullAsset, ContentfullObrigado } from '../interfaces/Contentfull';

import style from '../styles/Obrigado.module.css';

export default function obrigado({ image, content }: ContentfullObrigado) {
  return (
    <>
      <Layout image={image}>
        <div className={style.content}>{content}</div>
      </Layout>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  let image = (await fechtAsset('g4yjeOZJUv67QmnbD39Mw')) as ContentfullAsset;
  let content = (await fechtEntry('1SD5VG7fBVgo01gqiAJnCi')) as {};
  console.log(content);

  return { props: { image: image, ...content } };
};
