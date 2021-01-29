import React from 'react';

import {GetStaticProps} from 'next';
import {fetchContentType, fetchAsset, fetchEntry} from '../libs/api';

import {
    ContentfullAsset,
    ContentfullAssetInEntry,
    ContentfullPortfolio,
} from '../interfaces/Contentfull';

import Layout from '../componenets/Layout/Layout';

import styles from '../styles/Portfolio.module.css';

export default function Portfolio({image, imagesGroups}: ContentfullPortfolio) {
    return (
        <>
            <Layout image={image}>
                <div className={styles.container}>
                    <div className={styles.imageContainer}>
                        {imagesGroups.map((group, index) => (
                            <div
                                key={index}
                                className={index != 0 ? 'uk-margin-large-top' : ''}>
                                <span
                                    className={
                                        styles.groupHeader + ''
                                    }>
                                    {group.name}
                                </span>

                                <div uk-slider="true">
                                    <div className="uk-position-relative">
                                        <div className="uk-slider-container uk-light">
                                            <ul
                                                className="uk-slider-items uk-child-width-1-1 uk-child-width-1-3@m uk-grid uk-grid-small"
                                                uk-lightbox="animation: slide">
                                                {group.images?.map(
                                                    (image, i) => {
                                                        if (
                                                            image.fields != null
                                                        )
                                                            return (
                                                                <li
                                                                    className=""
                                                                    key={i}>
                                                                    <div className="uk-panel">
                                                                        <a
                                                                            href={
                                                                                image
                                                                                    .fields
                                                                                    .file
                                                                                    .url
                                                                            }
                                                                            data-caption={
                                                                                image
                                                                                    .fields
                                                                                    .description
                                                                            }>
                                                                            <img
                                                                                src={
                                                                                    image
                                                                                        .fields
                                                                                        .file
                                                                                        .url
                                                                                }
                                                                                alt=""
                                                                            />
                                                                        </a>
                                                                    </div>
                                                                </li>
                                                            );
                                                    }
                                                )}
                                            </ul>
                                        </div>
                                        <div className="uk-hidden@s uk-light">
                                            <a
                                                className="uk-position-center-left uk-position-small"
                                                href="#"
                                                uk-slidenav-previous="true"
                                                uk-slider-item="previous"></a>
                                            <a
                                                className="uk-position-center-right uk-position-small"
                                                href="#"
                                                uk-slidenav-next="true"
                                                uk-slider-item="next"></a>
                                        </div>
                                        <div className="uk-visible@s">
                                            <a
                                                className="uk-position-center-left-out uk-position-small"
                                                href="#"
                                                uk-slidenav-previous="true"
                                                uk-slider-item="previous"></a>
                                            <a
                                                className="uk-position-center-right-out uk-position-small"
                                                href="#"
                                                uk-slidenav-next="true"
                                                uk-slider-item="next"></a>

                                            {/* <ul className="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Layout>
        </>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    let image = (await fetchAsset('g4yjeOZJUv67QmnbD39Mw')) as ContentfullAsset;
    type ContentfullPortfolio = {
        fields: {
            id: string;
            name: string;
            type: 'Array' | 'slug';
            items?: [];
            images?: ContentfullAssetInEntry[];
        }[];
    };
    let content = (await fetchContentType('gallery')) as ContentfullPortfolio;
    let contentEntry = (await fetchEntry('6MckzkxSXjTApKGgE2Tads')) as any;

    const tempImages = content.fields.filter((el) => {
        if (el.type === 'Array' && contentEntry[el.id] != null) {
            el.images = contentEntry[el.id];
            return {
                ...el,
                // NÃO FAZ SENTIDO
                // , images: contentEntry[el.id]
            };
        }
    });

    return {props: {image: image, imagesGroups: tempImages}};
};
