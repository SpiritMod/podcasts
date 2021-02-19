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

  // local state
  const [playIndex, setPlayIndex] = useState<number>(0);
  const [instance, setInstance] = useState<any>(null);
  // end local state

  const defaultOptions: any = {
    mode: 'full',
    defaultVolume: 1,
    autoPlay: list.length === 1,
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
    autoPlayInitLoadPlayList: list.length === 1,
    clearPriorAudioLists: true,
    mobileMediaQuery: '(max-width: 1px)',
    drag: false,
    onAudioListsSortEnd: {swap: false, animation: 100, swapClass: 'audio-lists-panel-sortable-highlight-bg'},
    //audioLists: audioList,
    volumeFade: {
      fadeIn: 0,
      fadeOut: 0
    },
    icon: {
      pause: pauseBtn,
      play: playBtn,
      loading: loadingBtn,
    },
    onAudioPlayTrackChange(fromIndex: any, endIndex: any) {
      console.log(
        'audio play track change:',
        fromIndex,
        endIndex,
      )
    },
    onAudioProgress(audioInfo: any) {
      //console.log('onAudioProgress audioInfo: ',audioInfo);
    },
  };

  const options = useMemo(() => {
    let autoplay = false;

    let currentIndex = current ? list.findIndex(obj => obj.id === current.id) : 0;

    if (!!current) {
      autoplay = play ? true : false;
      setPlayIndex(currentIndex);

      // if (currentIndex === 0) {
      //   //console.log('currentIndex === 0', currentIndex === 0)
      //   //setCurrent(list[0]);
      //   // instance.play();
      //   // setPlay(true);
      // }
    }

    return {
      ...defaultOptions,
      defaultPlayIndex: playIndex,
      autoPlay: autoplay,
      audioLists: list,
      defaultVolume: Math.sqrt(volume),
      //defaultPlayMode: list.length === 1 ? 'singleLoop' : 'orderLoop',
    }
  }, [list, volume, current]);

  // play new audio
  useEffect(() => {
    setCurrent(list[playIndex]);
    //console.log('playIndex setCurrent: ', playIndex, list[playIndex])

    if (instance !== null) {
      instance.updatePlayIndex(playIndex);
    }
  }, [playIndex]);



  /*const onAudioListsChange = useCallback((currentPlayIndex, audioLists) => {
      console.log('onAudioListsChange: ', currentPlayIndex, audioLists)
  }, []);*/

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
    // console.log('onPlayIndexChange: playIndex ', playIndex);
    // console.log('onPlayIndexChange: list', list);
    //console.log('onPlayIndexChange: ',playIndex);
  }

  const onAudioPlay = (audioInfo: any) => {
    //console.log('onAudioPlay: ',audioInfo);
    setPlay(true);
    if (!current) {
      setCurrent(list[audioInfo.playIndex])
    }
  };
  const onAudioPause = (audioInfo: any) => {
    //console.log('onAudioPause: ',audioInfo);
    setPlay(false);
  };


  return (
    <>
      {
        !!list.length && <ReactJkMusicPlayer
          {...options}
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
};

export default Player;
