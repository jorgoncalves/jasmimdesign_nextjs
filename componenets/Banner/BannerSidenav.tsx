import { ContentfullAsset } from '../../interfaces/Contentfull';

import styles from './Banner.module.css';

export default function Image({ title, file }: ContentfullAsset) {
  return (
    <div className={styles.bannerSidenav_container + ' uk-hidden@s'}>
      <img src={`${file.url}`} alt={title} />
    </div>
  );
}
