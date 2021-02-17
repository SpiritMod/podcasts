//core
import React, {useEffect} from 'react';
import { useHistory, useParams } from 'react-router-dom';

// styles
import styles from './styles/styles.module.scss';
import clsListenUs from '../ListenUs/styles/styles.module.scss';

// components
import ListenUs from '../ListenUs';
import Loader from '../Loader';
import Error from '../Error';
import Episodes from './Episodes';
import { book } from '../../navigation/book';
import { usePodcastPage } from '../../stores/podcastPage/usePodcastPage';

export interface IUserPublicRouteParams {
  slug: string;
}

const Podcast: React.FC = () => {
  const history = useHistory();

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

  //console.log('history: ', history);
  //console.log('slug: ', slug);

  // redirect to 404
  useEffect(() => {
    if (!isFetching && error && (error.status === 404)) {
      history.push(book.notFound)
    }
  }, [error, isFetching]);

  return (
    <>
      { errorMessage }
      { loader }
      { podcast }
      <Episodes />
    </>
  )
}

export default Podcast;
