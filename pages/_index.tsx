import {GetStaticProps} from 'next';

import Layout from '../components/Layout/Layout';

import {
    ContentfullAsset,
    ContentfullLogos,
    ContentfullBase,
} from '../interfaces/Contentfull';

import {fetchEntry, fetchAsset} from '../libs/api';

import style from '../styles/Home.module.css';

export default function Home({
    image,
    logo_522x230,
    logo_159x70,
}: ContentfullBase) {
    return (
        <>
            <Layout
                image={image}
                logo_522x230={logo_522x230}
                logo_159x70={logo_159x70}>
                <h1>Em desenvolvimento!</h1>
                <h3>Teremos novidades em breve!</h3>
            </Layout>
        </>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    let image = (await fetchAsset('g4yjeOZJUv67QmnbD39Mw')) as ContentfullAsset;
    let content = await fetchEntry('7p3vZDcjHQY2RY0Gujyw23');

    let logo_content = (await fetchEntry(
        '5afhTCYqzTm2nJdZuOWMKh'
    )) as ContentfullLogos;
    const logo_522x230 = logo_content.jasmimLogo522x230.fields;
    const logo_159x70 = logo_content.jasmimLogo159x70.fields;
    console.log(logo_522x230);

    return {props: {image: image, logo_522x230, logo_159x70, content}};
};
