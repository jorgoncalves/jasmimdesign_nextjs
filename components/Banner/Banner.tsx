import {ContentfullBase} from '../../interfaces/Contentfull';

import styles from './Banner.module.css';

export default function Image({logo_522x230}: ContentfullBase) {
    return (
        <div className={styles.banner_container + ' uk-visible@s'}>
            <img src={`${logo_522x230!.file.url}`} alt={logo_522x230!.title} />
        </div>
    );
}
