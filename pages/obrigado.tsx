import React from 'react';
import Layout from '../components/Layout/Layout';

import {GetStaticProps} from 'next';
import {fetchEntry, fetchAsset} from '../libs/api';

import {
    ContentfullAsset,
    ContentfullLogos,
    ContentfullObrigado,
} from '../interfaces/Contentfull';

import style from '../styles/Obrigado.module.css';

export default function obrigado({
    image,
    logo_522x230,
    logo_159x70,
    content,
}: ContentfullObrigado) {
    return (
        <>
            <Layout
                image={image}
                logo_522x230={logo_522x230}
                logo_159x70={logo_159x70}>
                <div className={style.content} id="obrigado-container">
                    {content}
                </div>
            </Layout>
        </>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    let image = (await fetchAsset('g4yjeOZJUv67QmnbD39Mw')) as ContentfullAsset;
    let content = (await fetchEntry('1SD5VG7fBVgo01gqiAJnCi')) as {};
    let logo_content = (await fetchEntry(
        '5afhTCYqzTm2nJdZuOWMKh'
    )) as ContentfullLogos;
    const logo_522x230 = logo_content.jasmimLogo522x230.fields;
    const logo_159x70 = logo_content.jasmimLogo159x70.fields;
    console.log(logo_522x230);

    return {props: {image, logo_522x230, logo_159x70, ...content}};
};
