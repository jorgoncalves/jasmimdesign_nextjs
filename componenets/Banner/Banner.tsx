import { ContentfullAsset } from '../../interfaces/Contentfull';

import styles from './Banner.module.css';

export default function Image({ title, file }: ContentfullAsset) {
  return (
    <div className={styles.banner_container}>
      <img src={`${file.url}`} alt={title} className='' />
    </div>
  );
}
