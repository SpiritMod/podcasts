//core
import React from 'react';

// styles
import styles from './styles/styles.module.scss';
import clsListenUs from '../ListenUs/styles/styles.module.scss';

// components
import ListenUs from "../ListenUs";
import LoadMoreLink from "../LoadMoreLink";
import Track from './Track';
import Sort from '../Sort';

//import ITrack from './Track';

// interface IPodcastPage {
//   id: string,
//   title: string,
//   description: string,
//   bgUrl: string,
//   imgUrl: string,
//   playlist: [typeof ITrack],
// }

const data = {
  id: '1',
  title: 'Еще подкаст',
  description: 'Welcome on board! Здесь говорят про Counter-strike. Эксперты, аналитики, профессиональные игроки каждые две недели по вторникам в гостях у Степана Шульги обсуждают последние громкие события из мира CS:GO, вспоминают прошлое, размышляют о будущем и просто душевно беседуют. Подписывайтесь, будет интересно.',
  bgUrl: 'https://test.fmw.pm/podcasts/public/images/podcast/bg-podcast.jpg',
  imgUrl: 'https://test.fmw.pm/podcasts/public/images/podcast/img-4.png',
  playlist: [
    {
      id: '11',
      title: 'Epizode #1: Астон Вилла удивляет; позор Реала; чемпионская гонка в РПЛ; шальной экспресс на 800 000$',
      podcast: 'Еще подкаст',
      imgUrl: 'https://test.fmw.pm/podcasts/public/images/podcast/img-4.png',
    },
    {
      id: '12',
      title: 'Epizode #2: Астон Вилла удивляет; позор Реала; чемпионская гонка в РПЛ; шальной экспресс на 800 000$',
      podcast: 'Еще подкаст Еще подкаст Еще подкаст',
      imgUrl: 'https://test.fmw.pm/podcasts/public/images/podcast/img-4.png',
    },
    {
      id: '13',
      title: 'Epizode #3: Астон Вилла удивляет; позор Реала; чемпионская гонка в РПЛ; шальной экспресс на 800 000$',
      podcast: 'Еще подкаст',
      imgUrl: 'https://test.fmw.pm/podcasts/public/images/podcast/img-4.png',
    },
    {
      id: '14',
      title: 'Epizode #4: Астон Вилла удивляет; позор Реала; чемпионская гонка в РПЛ; шальной экспресс на 800 000$',
      podcast: 'Еще подкаст',
      imgUrl: 'https://test.fmw.pm/podcasts/public/images/podcast/img-4.png',
    },
  ]
}


const Podcast: React.FC = () => {

  const { title, description, playlist, bgUrl, imgUrl } = data;

  const tracks = playlist.map((item) => {
    return <Track key={item.id} {...item} />
  })

  return (
    <>
      <section className={styles.section}>
        <div className={styles.podcast}>
          <div className={styles.bg} style={{ backgroundImage: `url('${bgUrl}')`}} />
          <div className={styles.wrap}>
            <div className={styles.album}>
              <img src={imgUrl} alt="img" />
            </div>
            <div className={styles.content}>
              <div className={styles.header}>
                <div className={styles.title}>{title}</div>
                <div className={styles.description}>{description}</div>
              </div>
              <div className={styles.subscribe}>
                <ListenUs className={clsListenUs.small} title={false}  />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.section}>
        <div className={styles.playlist}>
          <div className={styles.playlist_header}>
            <div className={styles.playlist_title}>Эпизоды</div>
              <Sort/>
          </div>
          <div className={styles.playlist_content}>
            {tracks}
          </div>
          <div className={styles.playlist_footer}>
            <LoadMoreLink label={'Предыдущие выпуски'}/>
          </div>
        </div>
      </section>
    </>
  )
};

export default Podcast;
