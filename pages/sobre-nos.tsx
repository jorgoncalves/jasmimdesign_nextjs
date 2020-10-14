import { GetStaticProps } from 'next';
import { fechtEntry, fechtAsset } from '../libs/api';

import { ContentfullAsset } from '../interfaces/Contentfull';

import Layout from '../componenets/Layout/Layout';

import styles from '../styles/SobreNos.module.css';

interface Props {
  image: ContentfullAsset;
  content: {
    content: string;
    contentSignature: string;
    teamImage: {
      sys: any;
      fields: {
        title: string;
        file: {
          url: string;
          details: Object;
          fileName: string;
          contentType: string;
        };
      };
    };
  };
}

export default function sobre_nos({ image, content }: Props) {
  return (
    <>
      <Layout image={image}>
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
