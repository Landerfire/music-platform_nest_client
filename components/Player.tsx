import { Pause, PlayArrow } from '@mui/icons-material';
import { Box, Grid, IconButton } from '@mui/material';
import React, { useEffect } from 'react';
import { useActions } from '../hooks/useAction';
import { useTypedSelector } from '../hooks/useTypedSelector';
import styles from '../styles/Player.module.scss';
import TrackProgressBar from './TrackProgressBar';

let audio: HTMLAudioElement;

const Player: React.FC = () => {
  const { active, pause, volume, duration, currentTime, activeTrackId } = useTypedSelector((state) => state.player);
  const { pauseTrack, playTrack, setVolume, setDuration, setCurrentTime, setActive, setActiveTrackId } = useActions();

  // Инициализация аудио-трека при загрузке страницы
  useEffect(() => {
    if (!audio) {
      audio = new Audio();
    } else {
      setAudio();
      audio.play();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  const setAudio = () => {
    if (active) {
      audio.src = 'http://localhost:5000/' + active.audio;
      console.log('pisya');
      audio.volume = volume / 100;
      audio.onloadedmetadata = () => {
        setDuration(Math.floor(audio.duration));
      };
      audio.ontimeupdate = () => {
        setCurrentTime(Math.floor(audio.currentTime));
      };
    }
  };
  // Конец инициализации аудио-трека при загрузке страницы

  const play = () => {
    if (pause) {
      playTrack();
      setTimeout(() => audio.play(), 150);
      // audio.play();
    } else {
      pauseTrack();
      audio.pause();
    }
  };

  const changeVolume = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(Number(event.target.value));
    audio.volume = Number(event.target.value) / 100;
  };
  const changeCurrentTime = (event: React.ChangeEvent<HTMLInputElement>) => {
    const dragCurrentTime = () => {
      audio.pause();
      setTimeout(() => audio.play(), 380);
    };

    dragCurrentTime();

    setCurrentTime(Number(event.target.value));
    audio.currentTime = Number(event.target.value);
  };

  if (!active) {
    return null;
  }

  return (
    <div className={styles.player}>
      <IconButton disabled={!active ? true : false} onClick={play}>
        {pause ? <PlayArrow /> : <Pause />}
      </IconButton>
      <Grid container direction={'column'} sx={{ width: 180, margin: '0 20px' }}>
        <div>{active?.name}</div>
        <div className={styles.trackArtist}>{active?.artist}</div>
      </Grid>
      <Box sx={{ width: '32vw', mx: 'auto' }}>
        <TrackProgressBar left={currentTime} right={duration} onChange={changeCurrentTime} />
      </Box>
      <Box sx={{ width: '10vw', ml: 'auto' }}>
        <TrackProgressBar type="volume" left={volume} right={100} onChange={changeVolume} />
      </Box>
    </div>
  );
};

export default Player;
