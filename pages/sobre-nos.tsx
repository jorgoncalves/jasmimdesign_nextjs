import { GetStaticProps } from 'next';
import { fechtEntry, fechtAsset } from '../libs/api';

import {
  ContentfullAsset,
  ContentfullSobreNos
} from '../interfaces/Contentfull';

import Layout from '../componenets/Layout/Layout';

import styles from '../styles/SobreNos.module.css';

export default function sobre_nos({ image, content }: ContentfullSobreNos) {
  return (
    <>
      <Layout image={image}>
        <div className={styles.container}>
          <img
            className={styles.imageEquipa}
            src={`${content.teamImage.fields.file.url}`}
            alt=''
          />
          <div className={styles.content_container}>
            <div className={styles.content}>
              <span>{content.content}</span>
            </div>
            <div className={styles.content_signature}>
              {content.contentSignature}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  let image = (await fechtAsset('g4yjeOZJUv67QmnbD39Mw')) as ContentfullAsset;
  let content = await fechtEntry('7p3vZDcjHQY2RY0Gujyw23');
  console.log(content);

  return { props: { image: image, content } };
};
