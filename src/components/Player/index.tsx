//core
import React from "react";
import ReactJkMusicPlayer from 'react-jinke-music-player';

//styles
import 'react-jinke-music-player/assets/index.css';
import './styles/player.scss';

import iconLoading from './icons/spinner.svg';

export interface ISong {
  name: string,
  singer: string,
  cover: string,
  musicSrc: string,
}

const audio = [
  {
    name: 'Despacito',
    singer: 'Luis Fonsi',
    cover: 'http://res.cloudinary.com/alick/image/upload/v1502689731/Despacito_uvolhp.jpg',
    musicSrc: 'http://res.cloudinary.com/alick/video/upload/v1502689683/Luis_Fonsi_-_Despacito_ft._Daddy_Yankee_uyvqw9.mp3',

  },
  {
    name: 'Dorost Nemisham',
    singer: 'Sirvan Khosravi',
    cover: 'https://res.cloudinary.com/ehsanahmadi/image/upload/v1573758778/Sirvan-Khosravi-Dorost-Nemisham_glicks.jpg',
    musicSrc: 'https://res.cloudinary.com/ehsanahmadi/video/upload/v1573550770/Sirvan-Khosravi-Dorost-Nemisham-128_kb8urq.mp3',
  },
  {
    name: 'Последний эпизод первого сезона',
    singer: 'На дистанции',
    cover: 'https://image.simplecastcdn.com/images/e3d73a18-670b-42b0-a65a-d23a964e2250/00760a71-9f0d-4e90-bca0-c9a747484700/300x300/na-distancii-podcast-cover-v5@2x.jpg',
    musicSrc: 'https://cdn.simplecast.com/audio/69e304f5-e80d-42bb-8f15-6343695e96be/episodes/1d005bd7-dcbf-41c0-bf8c-6f016439b92e/audio/2675a868-c257-457b-9b4a-baa0ee686ddd/default_tc.mp3',
  },
];

const Player: React.FC = () => {

  // const [audioList, setAudioList] = useState<ISong[] | undefined>(undefined);
  //
  // useEffect(() => {
  //   setTimeout(() => {
  //     setAudioList([...audio]);
  //   }, 20)
  // }, [audioList, setAudioList]);

  const playBtn = <span className={'icon-play'}/>;
  const pauseBtn = <span className={'icon-pause'}/>;
  const loadingBtn = <img src={iconLoading} alt="Loading..."/>;

  return (
    <>
      {
        <ReactJkMusicPlayer
          mode={'full'}
          autoPlay={false}
          showDownload={false}
          showPlayMode={false}
          showThemeSwitch={false}
          showReload={false}
          remember={true}
          preload={true}
          defaultPlayIndex={0}
          defaultPlayMode={'orderLoop'}
          showMediaSession
          quietUpdate
          clearPriorAudioLists
          mobileMediaQuery="(max-width: 1px)"
          audioLists={audio}

          icon={{
            pause: pauseBtn,
            play: playBtn,
            loading: loadingBtn,
          }}

        />
      }
    </>
  )
};

export default Player;
