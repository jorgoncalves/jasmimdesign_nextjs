import {GetStaticProps} from 'next';

import Layout from '../components/Layout/Layout';

import {
    ContentfullAsset,
    ContentfullBase,
    ContentfullLogos,
} from '../interfaces/Contentfull';

import {fetchEntry, fetchAsset} from '../libs/api';

import styles from '../styles/404.module.css';

export default function Custom404({
    image,
    logo_159x70,
    logo_522x230,
}: ContentfullBase) {
    return (
        <>
            <Layout
                image={image}
                logo_522x230={logo_522x230}
                logo_159x70={logo_159x70}>
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
    let logo_content = (await fetchEntry(
        '5afhTCYqzTm2nJdZuOWMKh'
    )) as ContentfullLogos;
    const logo_522x230 = logo_content.jasmimLogo522x230.fields;
    const logo_159x70 = logo_content.jasmimLogo159x70.fields;
    console.log(logo_522x230);

    return {props: {image: image, logo_522x230, logo_159x70, content}};
};
