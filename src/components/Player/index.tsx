//core
import React, {useMemo, useEffect, useState, useCallback} from "react";
import ReactJkMusicPlayer, { ReactJkMusicPlayerProps } from 'react-jinke-music-player';

import { usePlayer } from "../../stores/player/usePlayer";
import { IPlaylistDataItem } from "../../stores/player/types";

//styles
import 'react-jinke-music-player/assets/index.css';
import './styles/player.scss';

import iconLoading from './icons/spinner.svg';
//import { useThrottle } from "@react-hook/throttle";

/*export interface ISong {
  id?: string,
  name: string,
  singer: string,
  cover: string,
  musicSrc: string,
  timestamp?: string,
}

const audio = [
  {
    //id: '1',
    name: 'Despacito',
    singer: 'Luis Fonsi',
    cover: 'http://res.cloudinary.com/alick/image/upload/v1502689731/Despacito_uvolhp.jpg',
    musicSrc: 'http://res.cloudinary.com/alick/video/upload/v1502689683/Luis_Fonsi_-_Despacito_ft._Daddy_Yankee_uyvqw9.mp3',
  },
  {
    //id: '2',
    name: 'Dorost Nemisham',
    singer: 'Sirvan Khosravi',
    cover: 'https://res.cloudinary.com/ehsanahmadi/image/upload/v1573758778/Sirvan-Khosravi-Dorost-Nemisham_glicks.jpg',
    musicSrc: 'https://res.cloudinary.com/ehsanahmadi/video/upload/v1573550770/Sirvan-Khosravi-Dorost-Nemisham-128_kb8urq.mp3',
  },
  {
    //id: '3',
    name: 'Последний эпизод первого сезона',
    singer: 'На дистанции',
    cover: 'https://image.simplecastcdn.com/images/e3d73a18-670b-42b0-a65a-d23a964e2250/00760a71-9f0d-4e90-bca0-c9a747484700/300x300/na-distancii-podcast-cover-v5@2x.jpg',
    musicSrc: 'https://cdn.simplecast.com/audio/69e304f5-e80d-42bb-8f15-6343695e96be/episodes/1d005bd7-dcbf-41c0-bf8c-6f016439b92e/audio/2675a868-c257-457b-9b4a-baa0ee686ddd/default_tc.mp3',
  },
];*/

// Buttons
const playBtn = <span className={'icon-play'}/>;
const pauseBtn = <span className={'icon-pause'}/>;
const loadingBtn = <img src={iconLoading} alt="Loading..."/>;

const Player: React.FC = () => {
  const { volume, current, playlist, setVolume } = usePlayer();

  const [audioList, setAudioLists] = useState<IPlaylistDataItem[]>([]);
  const [playIndex, setPlayIndex] = useState<number>(0);
  const [instance, setInstance] = useState<any>(null);
  //const [playerVolume, setPlayerVolume] = useThrottle(volume, 1000);

  // update volume
  // useEffect(() => {
  //   setVolume(playerVolume);
  // }, [playerVolume]);

  // update playlist
  useEffect(() => {
    setAudioLists(playlist);
  }, [playlist]);


  const onAudioListsChange = useCallback((currentPlayIndex, audioLists) => {
      //dispatch(syncQueue(currentPlayIndex, audioLists))
      console.log('onAudioListsChange: ', currentPlayIndex, audioLists);
  }, []);

  const getAudioInstance = (instance: any) => {
    setInstance(instance)
    //console.log("Getting audio instance", instance);
    //instance.updatePlayIndex(2);
  };

  const onAudioVolumeChange = useCallback(
    (volume) => {
      console.log('volume: ', volume);
      setVolume(volume);
    },
    []
  );

  const onPlayIndexChange = (playIndex: number) => {
    setPlayIndex(playIndex);
    console.log('onPlayIndexChange: ',playIndex);
  }

  const defaultOptions: ReactJkMusicPlayerProps = {
    mode: 'full',
    defaultVolume: 1,
    autoPlay: audioList.length === 1,
    showDownload: false,
    showPlayMode: false,
    showThemeSwitch: false,
    showReload: false,
    remember: false,
    preload: true,
    defaultPlayIndex: 0,
    defaultPlayMode: 'orderLoop',
    showMediaSession: true,
    quietUpdate: true,
    autoPlayInitLoadPlayList: audioList.length === 1,
    clearPriorAudioLists: true,
    mobileMediaQuery: '(max-width: 1px)',
    audioLists: audioList,
    volumeFade: {
      fadeIn: 0,
      fadeOut: 0
    },
    icon: {
      pause: pauseBtn,
      play: playBtn,
      loading: loadingBtn,
    },
    onAudioPlayTrackChange(fromIndex, endIndex) {
      console.log(
        'audio play track change:',
        fromIndex,
        endIndex,
      )
    },
    onAudioProgress(audioInfo) {
      //console.log('onAudioProgress audioInfo: ',audioInfo);
    },
  };

  const options = useMemo(() => {
    const currentIndex = current ? audioList.findIndex(obj => obj.id === current.id) : 0;
    setPlayIndex(currentIndex);

    return {
      ...defaultOptions,
      defaultPlayIndex: playIndex,
      autoPlay: !!current,
      audioLists: audioList,
      defaultVolume: Math.sqrt(volume),
    }
  }, [audioList, volume]);

  // play new audio
  useEffect(() => {
    if (instance !== null) {
      instance.updatePlayIndex(playIndex);
    }
  }, [playIndex]);

  return (
    <>
      {
        <ReactJkMusicPlayer
          {...options}
          onAudioListsChange={onAudioListsChange}
          onPlayIndexChange={onPlayIndexChange}
          onAudioVolumeChange={onAudioVolumeChange}
          getAudioInstance={getAudioInstance}
          //onAudioProgress={(audioInfo) => console.log(audioInfo)}
        />
      }
    </>
  )
};

export default Player;
