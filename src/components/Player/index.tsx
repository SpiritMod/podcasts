//core
import React, {useMemo, useEffect, useState, useCallback} from "react";
import ReactJkMusicPlayer from 'react-jinke-music-player';

import { usePlayer } from "../../stores/player/usePlayer";

//styles
import 'react-jinke-music-player/assets/index.css';
import './styles/player.scss';

import iconLoading from './icons/spinner.svg';
//import { useThrottle } from "@react-hook/throttle";

// Buttons
const playBtn = <span className={'icon-play'}/>;
const pauseBtn = <span className={'icon-pause'}/>;
const loadingBtn = <img src={iconLoading} alt="Loading..."/>;

const Player: React.FC = () => {
  const { volume, play, current, list, setVolume, setCurrent, setPlayerInstance, setPlay } = usePlayer();

  //console.log('list: ', list);
  //console.log('current: ', current);
  // console.log('play PLAYER: ', play);

  // local state
  const [playIndex, setPlayIndex] = useState<number>(0);
  const [instance, setInstance] = useState<any>(null);
  const [audioLists, setAudioLists] = useState<any>([]);
  // end local state

  useEffect(() => {
    if (!audioLists.length) {
      setAudioLists(list);
    } else {
      const newAudioLists = [...audioLists, ...list].filter((v,i,a)=>a.findIndex(t=>(t.id === v.id))===i);

      setAudioLists(newAudioLists);
    }
  }, [list])

  const getAudioInstance = (instance: any) => {
    setInstance(instance);
    setPlayerInstance(instance);
  };

  const onAudioVolumeChange = useCallback(
    (volume) => {
      setVolume(volume);
    },
    [setVolume]
  );

  const onPlayIndexChange = (playIndex: number) => {
    setPlayIndex(playIndex);
  }

  const onAudioPlay = (audioInfo: any) => {
    //console.log('onAudioPlay: ',audioInfo);
    !play && setPlay(true);
    if (!current) {
      console.log(audioInfo.playIndex);
      setCurrent(list[audioInfo.playIndex])
    }
  };
  const onAudioPause = (audioInfo: any) => {
    //console.log('onAudioPause: ',audioInfo);
    setPlay(false);
  };

  const defaultOptions: any = {
    mode: 'full',
    defaultVolume: 1,
    autoPlay: play,
    showDownload: false,
    showPlayMode: false,
    showThemeSwitch: false,
    showReload: false,
    preload: true,
    defaultPlayIndex: 0,
    defaultPlayMode: 'orderLoop',
    showMediaSession: true,
    quietUpdate: true,
    //remember: true,
    //autoPlayInitLoadPlayList: false,
    //clearPriorAudioLists: true,
    mobileMediaQuery: '(max-width: 1px)',
    drag: false,
    volumeFade: {
      fadeIn: 0,
      fadeOut: 0
    },
    icon: {
      pause: pauseBtn,
      play: playBtn,
      loading: loadingBtn,
    },
  };

  useMemo(() => {
    let currentIndex = current ? audioLists.findIndex((obj:any) => obj.id === current.id) : 0;

    if (!!current) {
      setPlayIndex(currentIndex);
    }
  }, [current]);

  //update volume
  const newVolume = useMemo(() => {
    return {
      defaultVolume: Math.sqrt(volume),
    }
  }, [volume]);

  // play new audio
  useEffect(() => {
    //console.log('playIndex setCurrent: ', playIndex, audioLists[playIndex], list);

    setCurrent(audioLists[playIndex]);

    if (instance !== null) {
      instance.updatePlayIndex(playIndex);
    }
  }, [playIndex]);

  return (
    <>
      {
        !!list.length && <ReactJkMusicPlayer
          {...defaultOptions}
          {...newVolume}
          audioLists={audioLists}
          onPlayIndexChange={onPlayIndexChange}
          onAudioVolumeChange={onAudioVolumeChange}
          getAudioInstance={getAudioInstance}
          onAudioPlay={onAudioPlay}
          onAudioPause={onAudioPause}
          /*onAudioListsChange={onAudioListsChange}*/
          //onAudioProgress={(audioInfo) => console.log(audioInfo)}
        />
      }
    </>
  )
}

export default Player;
