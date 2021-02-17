//core
import React from 'react';

// hooks
import {useSocial} from '../../stores/social/useSocial';

//styles
import styles from './styles/styles.module.scss';
import Error from "../Error";

// types
interface IListenUs {
  title?: boolean,
  className?: string,
}


// tetst data
// const data = [
//   {
//     id: '1',
//     url: 'https://www.google.com/',
//     img: 'https://test.fmw.pm/podcasts/public/images/platform/youtube.png'
//   },
//   {
//     id: '2',
//     url: 'https://www.google.com/',
//     img: 'https://test.fmw.pm/podcasts/public/images/platform/google-music.png'
//   },
//   {
//     id: '3',
//     url: 'https://www.google.com/',
//     img: 'https://test.fmw.pm/podcasts/public/images/platform/bind-1.png'
//   },
//   {
//     id: '4',
//     url: 'https://www.google.com/',
//     img: 'https://test.fmw.pm/podcasts/public/images/platform/spotify.png'
//   },
//   {
//     id: '5',
//     url: 'https://www.google.com/',
//     img: 'https://test.fmw.pm/podcasts/public/images/platform/google-music.png'
//   },
//   {
//     id: '6',
//     url: 'https://www.google.com/',
//     img: 'https://test.fmw.pm/podcasts/public/images/platform/bind-1.png'
//   },
//   {
//     id: '7',
//     url: 'https://www.google.com/',
//     img: 'https://test.fmw.pm/podcasts/public/images/platform/spotify.png'
//   },
// ];

const ListenUs: React.FC<IListenUs> = ({title = true, className}) => {

  const { isFetching, error, data } = useSocial();

  const errorMessage = !isFetching && error && <Error message={error.message}/>;

  const links = data && data.map(({id, url, img}) => {
    return (
      <a href={url} key={id} target="_blank" rel="noreferrer noopener" className={styles.icon}>
        <img src={img} alt="img"/>
      </a>
    )
  });

  const listen = <div className={`${styles.listen} ${className}`}>
    {
      title && (
        <div className={styles.header}>
          <div className={styles.title}>Слушай нас</div>
        </div>
      )
    }
    <div className={styles.content}>
      {links}
    </div>
  </div>;

  return (
    <>
      { errorMessage }
      { listen }
    </>
  )
};

export default ListenUs;
