import { Pause, PlayArrow, VolumeUp } from '@mui/icons-material';
import { Box, Grid, IconButton } from '@mui/material';
import React from 'react';
import { useActions } from '../hooks/useAction';
import { useTypedSelector } from '../hooks/useTypedSelector';
import styles from '../styles/Player.module.scss';
import { ITrack } from '../types/track';
import TrackProgressBar from './TrackProgressBar';

const Player: React.FC = () => {
  const track: ITrack = {
    _id: '1',
    name: 'Трек 1',
    artist: 'Исполнитель 1',
    text: 'Какой-то текст',
    listens: 0,
    audio: 'http://localhost:5000/audio/3245b18e-1262-47eb-940d-596b55017651.mp3',
    picture: 'http://localhost:5000/image/88ab34c1-6475-4712-8d2d-f02d8259632a.jpg',
    comments: [],
  };
  const { active, pause, volume, duration, currentTime } = useTypedSelector((state) => state.player);
  const { pauseTrack, playTrack } = useActions();

  const play = () => {
    pause ? playTrack() : pauseTrack();
  };

  return (
    <div className={styles.player}>
      <IconButton onClick={play}>{!pause ? <Pause /> : <PlayArrow />}</IconButton>
      <Grid container direction={'column'} sx={{ width: 180, margin: '0 20px' }}>
        <div>{track.name}</div>
        <div className={styles.trackArtist}>{track.artist}</div>
      </Grid>
      <Box sx={{ width: '32vw', mx: 'auto' }}>
        <TrackProgressBar left={0} right={100} onChange={() => ({})} />
      </Box>
      <Box sx={{ width: '10vw', ml: 'auto' }}>
        <TrackProgressBar type="volume" left={0} right={100} onChange={() => ({})} />
      </Box>
    </div>
  );
};

export default Player;
