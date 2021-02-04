//core
import React from 'react';
import { useParams } from 'react-router-dom';

// styles
import styles from './styles/styles.module.scss';
import clsListenUs from '../ListenUs/styles/styles.module.scss';

// components
import ListenUs from '../ListenUs';
import Loader from '../Loader';
import Error from '../Error';
import { usePodcastPage } from '../../stores/podcastPage/usePodcastPage';
import Episodes from './Episodes';

//import ITrack from './Track';

// interface IPodcastPage {
//   id: string,
//   title: string,
//   description: string,
//   bgUrl: string,
//   imgUrl: string,
//   playlist: [typeof ITrack],
// }

export interface IUserPublicRouteParams {
  slug: string;
}


const Podcast: React.FC = () => {
  const { slug } = useParams<IUserPublicRouteParams>();

  const { isFetching, error, data } = usePodcastPage(slug);

  const errorMessage = !isFetching && error && <Error message={error.message}/>;

  const loader = isFetching && <Loader/>;

  const podcast = data && <section className={styles.section}>
    <div className={styles.podcast}>
      <div className={styles.bg} style={{ backgroundImage: `url('${data.bgUrl}')`}} />
      <div className={styles.wrap}>
        <div className={styles.album}>
          <img src={data.imgUrl} alt="img" />
        </div>
        <div className={styles.content}>
          <div className={styles.header}>
            <div className={styles.title}>{data.title}</div>
            <div className={styles.description}>{data.description}</div>
          </div>
          <div className={styles.subscribe}>
            <ListenUs className={clsListenUs.small} title={false}  />
          </div>
        </div>
      </div>
    </div>
  </section>;

  return (
    <>
      { errorMessage }
      { loader }
      { podcast }
      <Episodes />
    </>
  )
};

export default Podcast;
