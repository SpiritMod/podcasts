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

  console.log('list: ', list);
  console.log('current: ', current);

  // local state
  const [playIndex, setPlayIndex] = useState<number>(0);
  const [instance, setInstance] = useState<any>(null);
  // end local state


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

  const defaultOptions: any = {
    mode: 'full',
    defaultVolume: 1,
    autoPlay: play,
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
    //onAudioListsSortEnd: {swap: false, animation: 100, swapClass: 'audio-lists-panel-sortable-highlight-bg'},
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
    console.log('options current:', current);

    let currentIndex = current ? list.findIndex(obj => obj.id === current.id) : 0;

    if (!!current) {
      console.log('options currentIndex:', currentIndex);
      //autoplay = play ? true : false;
      setPlayIndex(currentIndex);
      instance.updatePlayIndex(currentIndex);

      if (currentIndex < 0) {
        //setCurrent(list[0]);

      //   //console.log('currentIndex === 0', currentIndex === 0)
      //   //
      //   // instance.play();
      //   // setPlay(true);
      }
    }

    return {
      defaultPlayIndex: currentIndex,
      autoPlayInitLoadPlayList: true,
      //autoPlay: true,
      //defaultPlayMode: list.length === 1 ? 'singleLoop' : 'orderLoop',
    }
  }, [current]);

  //update playlist
  // const playlist = useMemo(() => {
  //   console.log('updated playlist');
  //   return {
  //     audioLists: list,
  //   }
  // }, [list]);


  //update volume
  const newVolume = useMemo(() => {
    return {
      defaultVolume: Math.sqrt(volume),
    }
  }, [volume]);

  // play new audio
  useEffect(() => {
    setCurrent(list[playIndex]);
    console.log('playIndex setCurrent: ', playIndex, list[playIndex])

    if (instance !== null) {
      //instance.updatePlayIndex(playIndex);
      //instance.play();
    }
  }, [playIndex]);


  return (
    <>
      {
        !!list.length && <ReactJkMusicPlayer
          {...defaultOptions}
          {...options}
          {...newVolume}
          audioLists={list}
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
