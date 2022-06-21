import { Card, Grid, IconButton } from '@mui/material';
import React from 'react';
import { ITrack } from '../types/track';
import styles from '../styles/TrackItem.module.scss';
import { Delete, Pause, PlayArrow } from '@mui/icons-material';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useActions } from '../hooks/useAction';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { formatDurationTime } from '../helpers/formatDurationTime';

interface TrackItemProps {
  track: ITrack;
  active?: boolean;
}

const TrackItem: React.FC<TrackItemProps> = ({ track }) => {
  const router = useRouter();

  const { playTrack, pauseTrack, setActive, setActiveTrackId } = useActions();
  const { pause, active, currentTime, duration, activeTrackId } = useTypedSelector((state) => state.player);

  const play = (event: React.MouseEvent) => {
    event.stopPropagation();
    setActive(track);
    setActiveTrackId(Number(track.id));
    pauseTrack();
  };

  return (
    <Card className={styles.track} onClick={() => router.push('/tracks/' + track.id)}>
      {/* <IconButton onClick={play}>{active ? <Pause /> : <PlayArrow />}</IconButton> */}
      <IconButton onClick={play}>
        <PlayArrow />
      </IconButton>
      <Image
        // style={{ width: 70, height: 70 }}
        width={70}
        height={70}
        src={'http://localhost:5000/' + track.picture}
        alt="Изображение обложки трека"
      />
      <Grid container className={styles.trackInfo}>
        <div>{track.name}</div>
        <div className={styles.trackArtist}>{track.artist}</div>
      </Grid>
      {Number(track.id) === activeTrackId && (
        <div>
          {formatDurationTime(currentTime)} / {formatDurationTime(duration)}
        </div>
      )}
      <IconButton className={styles.deleteBtn} onClick={(event) => event.stopPropagation()}>
        <Delete />
      </IconButton>
    </Card>
  );
};

export default TrackItem;
