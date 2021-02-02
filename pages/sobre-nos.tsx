import {GetStaticProps} from 'next';
import {fetchEntry, fetchAsset} from '../libs/api';

import {
    ContentfullAsset,
    ContentfullLogos,
    ContentfullSobreNos,
} from '../interfaces/Contentfull';

import Layout from '../components/Layout/Layout';

import styles from '../styles/SobreNos.module.css';

export default function sobre_nos({
    image,
    content,
    logo_159x70,
    logo_522x230,
}: ContentfullSobreNos) {
    return (
        <>
            <Layout
                image={image}
                logo_522x230={logo_522x230}
                logo_159x70={logo_159x70}>
                <div className={styles.container}>
                    <img
                        className={styles.imageEquipa}
                        src={`${content.teamImage.fields.file.url}`}
                        alt=""
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
    let image = (await fetchAsset('g4yjeOZJUv67QmnbD39Mw')) as ContentfullAsset;
    let content = await fetchEntry('7p3vZDcjHQY2RY0Gujyw23');
    console.log(content);

    let logo_content = (await fetchEntry(
        '5afhTCYqzTm2nJdZuOWMKh'
    )) as ContentfullLogos;
    const logo_522x230 = logo_content.jasmimLogo522x230.fields;
    const logo_159x70 = logo_content.jasmimLogo159x70.fields;
    console.log(logo_522x230);

    return {props: {image: image, logo_522x230, logo_159x70, content}};
};
