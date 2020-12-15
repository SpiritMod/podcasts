import React from 'react';

//styles
import styles from './styles/styles.module.scss';


// tetst data
const data = [
  {
    id: '1',
    url: 'https://www.google.com/',
    img: 'https://test.fmw.pm/podcasts/public/images/platform/youtube.png'
  },
  {
    id: '2',
    url: 'https://www.google.com/',
    img: 'https://test.fmw.pm/podcasts/public/images/platform/google-music.png'
  },
  {
    id: '3',
    url: 'https://www.google.com/',
    img: 'https://test.fmw.pm/podcasts/public/images/platform/bind-1.png'
  },
  {
    id: '4',
    url: 'https://www.google.com/',
    img: 'https://test.fmw.pm/podcasts/public/images/platform/spotify.png'
  },
];

const ListenUs: React.FC = () => {

  const links = data.map(({id, url, img}) => {
    return (
      <a href={url} key={id} target="_blank" rel="noreferrer noopener" className={styles.icon}>
        <img src={img} alt="img"/>
      </a>
    )
  });

  return (
    <div className={`${styles.listen} ${styles.test}`}>
      <div className={styles.header}>
        <div className={styles.title}>Слушай нас</div>
      </div>
      <div className={styles.content}>
        {links}
      </div>
    </div>
  )
};

export default ListenUs;
