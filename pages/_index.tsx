import { GetStaticProps } from 'next';

import Layout from '../componenets/Layout/Layout';

import { ContentfullAsset } from '../interfaces/Contentfull';

import { fetchEntry, fetchAsset } from '../libs/api';

interface Props {
    image: ContentfullAsset;
}

import style from '../styles/Home.module.css';

export default function Home({ image }: Props) {
    return (
        <>
            <Layout image={image}>
                <h1>Em desenvolvimento!</h1>
                <h3>Teremos novidades em breve!</h3>
            </Layout>
        </>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    let image = (await fetchAsset('g4yjeOZJUv67QmnbD39Mw')) as ContentfullAsset;
    let content = await fetchEntry('7p3vZDcjHQY2RY0Gujyw23');

    return { props: { image: image, content } };
};
