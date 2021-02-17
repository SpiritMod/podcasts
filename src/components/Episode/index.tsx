//core
import React, {useEffect} from "react";
import {useHistory, useParams} from "react-router-dom";
import Tabs, {TabPane} from 'rc-tabs';
import ReactHtmlParser from 'react-html-parser';

//components
import ListenUs from "../ListenUs";
import CustomScrollbars from "../CustomScrollbars";


//styles
import styles from './styles/styles.module.scss';
import clsListenUs from "../ListenUs/styles/styles.module.scss";
import './styles/tabs.scss';

// hooks
import { usePlayer } from "../../stores/player/usePlayer";
import { useEpisode } from "../../stores/episode/useEpisode";
import Error from "../Error";
import Loader from "../Loader";
import {book} from "../../navigation/book";


// types
export interface IUserPublicRouteParams {
  id: string;
}

const Episode: React.FC = () => {
  const history = useHistory();

  const { id } = useParams<IUserPublicRouteParams>();

  const { isFetching, error, data } = useEpisode(id);

  console.log('Episode data: ', data);

  const { setCurrent, setPlaylist } = usePlayer();

  // handlers
  const handlerClick = (playlist: any, colorFirst: string, colorSecond: string) => {
    document.documentElement.style.setProperty('--color-player-a', colorFirst);
    document.documentElement.style.setProperty('--color-player-b', colorSecond);

    setPlaylist(playlist);
    setCurrent(playlist[0]);
  }

  const errorMessage = !isFetching && error && <Error message={error.message}/>;

  const loader = isFetching && <Loader/>;

  const episode = data && <section className={styles.episode}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.block}>
            <div className={styles.album}>
              <img src={data.track.cover} alt={data.title} />
            </div>
            <div className={styles.visual}>
              <div className={styles.top}>
                <div className={styles.data}>
                  <div className={styles.title}>{data.title}</div>
                  <div className={styles.subtitle}>{data.subtitle}</div>
                  <div className={styles.description}>
                    { ReactHtmlParser(data.description) }
                  </div>
                </div>
              </div>
              <div className={styles.bottom}>
                <div className={styles.controls} onClick={() => handlerClick([{...data.track}], data.colorFirst, data.colorSecond)}>
                  <span>Слушать</span>
                  <div className={styles.play} style={{background: `linear-gradient(140deg, ${data.colorFirst}, ${data.colorSecond})`}}>
                    <span className="icon-play" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles.listen} ${styles.only_mob}`}>
            <ListenUs className={clsListenUs.small} title={false}/>
          </div>
        </div>
        <div className={styles.info}>
          <Tabs defaultActiveKey="1">
            {
              data.details.length &&  <TabPane tab="EPISODE DETAILS" key="1">
                <div className={`${styles.info__content_details} s-content`}>
                  { ReactHtmlParser(data.details) }
                </div>
              </TabPane>
            }
            {
              data.transcript.length && <TabPane tab="TRANSCRIPT" key="2">
                {
                  data.transcript.length > 1000 ? (
                    <CustomScrollbars>
                      { ReactHtmlParser(data.transcript) }
                    </CustomScrollbars>
                  ) : (
                    <div className={`${styles.info__content_transcript} s-content transcript`}>
                      {ReactHtmlParser(data.transcript)}
                    </div>
                  )
                }
              </TabPane>
            }
          </Tabs>
        </div>
      </div>
      <div className={styles.only_desk}>
        <ListenUs className={clsListenUs.vertical} title={false}/>
      </div>
    </section>;

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
      { episode }
    </>
  )
};


export default Episode;
